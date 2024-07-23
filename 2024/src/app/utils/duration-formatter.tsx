export function durationFormatter(from: string, to: string) {
  const f = new Date(from);
  const t = new Date(to);

  const formatMonthYear = (date: Date) =>
    date.toLocaleString("default", { month: "short", year: "numeric" });

  return formatMonthYear(f) === formatMonthYear(t)
    ? formatMonthYear(f)
    : `${formatMonthYear(f)} - ${formatMonthYear(t)}`;
}
