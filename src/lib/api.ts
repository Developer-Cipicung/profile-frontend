const DEFAULT_REVALIDATE_SECONDS = 60;
const DEFAULT_TIMEOUT_MILLISECONDS = 10_000;

type NextFetchOptions = RequestInit & {
  revalidate?: number | false;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly responseBody?: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function getApiBaseUrl() {
  const apiBaseUrl = process.env.API_BASE_URL?.trim();

  if (!apiBaseUrl) {
    throw new ApiError(
      "API_BASE_URL is not defined. Add it to the frontend .env.local file.",
    );
  }

  return apiBaseUrl.replace(/\/+$/, "");
}

export async function apiFetch<T>(
  endpoint: string,
  options: NextFetchOptions = {},
): Promise<T> {
  const normalizedEndpoint = endpoint.startsWith("/")
    ? endpoint
    : `/${endpoint}`;
  const url = `${getApiBaseUrl()}${normalizedEndpoint}`;
  const headers = new Headers(options.headers);
  const method = options.method?.toUpperCase() ?? "GET";

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  if (
    options.body &&
    !(options.body instanceof FormData) &&
    !headers.has("Content-Type")
  ) {
    headers.set("Content-Type", "application/json");
  }

  let response: Response;
  const nextOptions =
    method === "GET" && options.cache !== "no-store"
      ? (options.next ?? { revalidate: options.revalidate ?? DEFAULT_REVALIDATE_SECONDS })
      : undefined;

  try {
    response = await fetch(url, {
      ...options,
      headers,
      next: nextOptions,
      signal: options.signal ?? AbortSignal.timeout(DEFAULT_TIMEOUT_MILLISECONDS),
    });
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Unknown error";
    throw new ApiError(`Unable to reach the API at ${url}: ${reason}`);
  }

  const responseBody = await response.text();

  if (!response.ok) {
    let message = `API request failed with status ${response.status} (${response.statusText})`;

    try {
      const errorData = JSON.parse(responseBody) as Record<string, unknown>;
      const apiMessage = errorData.message ?? errorData.error;

      if (typeof apiMessage === "string" && apiMessage.trim()) {
        message = apiMessage;
      }
    } catch {
      if (responseBody.trim()) {
        message = responseBody.slice(0, 160);
      }
    }

    throw new ApiError(
      message,
      response.status,
      responseBody.slice(0, 500),
    );
  }

  if (response.status === 204 || !responseBody) {
    return undefined as T;
  }

  try {
    return JSON.parse(responseBody) as T;
  } catch {
    throw new ApiError(
      `API returned invalid JSON for ${normalizedEndpoint}`,
      response.status,
      responseBody.slice(0, 500),
    );
  }
}
