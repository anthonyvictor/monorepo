export const formatShortDate = (date: Date) => {
  return date.toLocaleString("pt-br", { day: "numeric", month: "numeric" });
};
