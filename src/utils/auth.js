import Cookies from "js-cookie"

const token = "Authorization"

export function gettoken() {
  return Cookies.get(token)
}

export function settoken(value) {
  return Cookies.set(token, value)
}

export function removetoken() {
  return Cookies.remove(token)
}
