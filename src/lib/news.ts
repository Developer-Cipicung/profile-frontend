export function getNewsDate(news: {
  publishedAt?: string;
  createdAt?: string;
}) {
  return news.publishedAt ?? news.createdAt ?? "";
}

export function formatNewsDate(value: string) {
  if (!value) return "Tanggal belum tersedia";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")       // remove all HTML tags
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/\s+/g, " ")           // collapse multiple spaces
    .trim();
}

export function containsHtml(value: string) {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}
