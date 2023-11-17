import Cookies from "js-cookie";

export function setCookie(key: string, value: string, options?: object) {
  Cookies.set(key, value, options);
}

export function getCookie(key: string): string | undefined {
  return Cookies.get(key);
}

export function removeCookie(key: string): void {
  Cookies.remove(key);
}