import "whatwg-fetch";
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

export function getUsers() {
  return get("users");
}

// Centralized API logic
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  // eslint-disable-next-line no-console
  console.log(error);
}
