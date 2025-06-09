export const getYearsSince = (start: string): number => {
  const [day, month, year] = start.split('.').map(Number);
  const startDate = new Date(year, month - 1, day);
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  const m = now.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < startDate.getDate())) {
    years--;
  }
  return years;
};