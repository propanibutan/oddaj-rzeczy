import { BASE_URL } from "./config";

export default function sendRequest(method, path, data, setError) {
  const url = new URL(path, BASE_URL);

  return fetch(url, {
    method,
    body: data && JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    })
    .then(response => response.json())
    .then(response => {
      if (response.status === "error"){
        setError(response.errors[0].msg)
      }
      return response;
    })
    .catch(err => console.log(err));
}
