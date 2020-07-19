import { api_url } from "./config";
import axios from 'axios';

const api_login = async (email, password) => {
  const response = await axios({
    method: 'post',
    url: api_url + "/user/login",
    data: {
      email: email,
      password: password
    }
  })
  return response.data
};

export { api_login };

// testEmail@gmail.com
// testPassword
