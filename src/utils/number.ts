export const onlyNumber = (string: string) => {
  if (!string) return "";

  const regExp = /[^0-9]/g;
  return string.replace(regExp, "");
};
