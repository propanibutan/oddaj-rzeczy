import { BASE_URL } from "./config";

export default function sendRequest(method, path, data) {
  const url = new URL(path, BASE_URL);

  return fetch(url, {
    method,
    body: data && JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      return response;
    })
    .then(response => response.json());
}
