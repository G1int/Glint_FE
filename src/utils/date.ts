import dayjs from "dayjs";

export const formatDateTime = (date: string) => {
  const dayjsDate = dayjs(date);
  const hour = dayjsDate.hour();
  const minute = dayjsDate.minute();
  const period = hour < 12 ? "오전" : "오후";

  const formatHour = (hour % 12 || 12).toString().padStart(2, "0");
  const formatMinute = minute.toString().padStart(2, "0");

  return `${period} ${formatHour}:${formatMinute}`;
};
