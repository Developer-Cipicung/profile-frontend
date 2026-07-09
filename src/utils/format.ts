export function formatNumber(value?: number) {
  return new Intl.NumberFormat("id-ID").format(value ?? 0);
}

export function formatDate(value?: string) {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatMonthYear(month?: number, year?: number) {
  if (!month && !year) return "-";
  if (!month) return String(year);

  return `${month}/${year ?? ""}`;
}
