export function getImageUrl(imagePath?: string | null) {
  if (!imagePath) return null;

  if (/^https?:\/\//i.test(imagePath)) {
    // Force https to avoid Next.js blocking http URLs that resolve to private IPs
    return imagePath.replace(/^http:\/\//i, "https://");
  }

  const apiOrigin = process.env.NEXT_PUBLIC_API_ORIGIN?.replace(/\/+$/, "");

  if (!apiOrigin) {
    return imagePath;
  }

  const normalizedPath = imagePath.startsWith("/")
    ? imagePath
    : `/${imagePath}`;

  return `${apiOrigin}${normalizedPath}`;
}
