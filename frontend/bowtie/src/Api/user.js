import { api_url } from "./config";

const api_login = async (email, password) => {
  const response = await fetch(api_url + "/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  const json = await response.json();
  return json
};

export { api_login };

// testEmail@gmail.com
// testPassword
