export const yesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  return date.toISOString().split("T")[0];
};

export const formatApiDate = (date: Date) => date.toISOString().split("T")[0];

export const dateDaysAgo = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return formatApiDate(date);
};
