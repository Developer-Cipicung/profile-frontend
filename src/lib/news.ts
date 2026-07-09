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

export function containsHtml(value: string) {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}
