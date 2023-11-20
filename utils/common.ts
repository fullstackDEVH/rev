import Cookies from "js-cookie";
import { format, parseISO } from "date-fns";

export function setCookie(key: string, value: string, options?: object) {
  Cookies.set(key, value, options);
}

export function getCookie(key: string): string | undefined {
  return Cookies.get(key);
}

export function removeCookie(key: string): void {
  Cookies.remove(key);
}

export const generateTimeOptions = () => {
  const timeOptions = [];
  for (let hour = 8; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      const time = `${formattedHour}:${formattedMinute}`;
      timeOptions.push(time);
    }
  }
  return timeOptions;
};

export const formatDateTime = (isoDateString: string) => {
  const parsedDate = parseISO(isoDateString);
  const formattedDate = format(parsedDate, "dd/MM/yyyy 'lúc' HH:mm");
  return formattedDate;
};
