export function durationFormatter(from: string, to: string) {
  const f = new Date(from);
  const t = new Date(to);

  // const diffInMonths =
  //   (t.getFullYear() - f.getFullYear()) * 12 + (t.getMonth() - f.getMonth());
  // const formatYear = (date: Date) => date.getFullYear();
  const formatMonthYear = (date: Date) =>
    date.toLocaleString("default", { month: "short", year: "numeric" });

  return `${formatMonthYear(f)} - ${formatMonthYear(t)}`;
}
