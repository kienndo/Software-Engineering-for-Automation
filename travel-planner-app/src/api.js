export const base = "http://127.0.0.1:8000/api";

export async function api(path, {method = "GET", body = null} = {}) {
  const options = {method, headers: {}};
  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const token = localStorage.getItem("token");
  if (token) options.headers["Authorization"] = `Token ${token}`;

  const res = await fetch(`${base}${path}`, options);
  if (!res.ok) throw new Error(await res.text());
  if (res.status === 204) return null;
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}