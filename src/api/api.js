import http from "@/utils/http"

export const loginapi = (data) => {
  return http.post("/api/sys/login", data)
}
