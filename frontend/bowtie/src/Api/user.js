import { api_url } from "./config";
import axios from 'axios';

// Login of a user
// Returns the status / the errors in case we have ones
const api_login = async (email, password) => {
  try{
  const response = await axios({
    method: 'post',
    url: api_url + "/user/login",
    data: {
      email: email,
      password: password
    }
  })
  return response.data
} catch (err){
  return "error"
}
};

const api_register = async (username, email, password) => {
  try{
    const response = await axios({
      method: 'post',
      url: api_url + "/user/register",
      data: {
        username: username,
        email: email,
        password: password
      }
    })
    return response.data
  } catch (err) {
    return err
  }
}
const api_reauth = async (jwt) => {
  const response = await axios({
    method: "get",
    url: api_url + "/user/reauth",
    headers: { Authorization: jwt },
  });
  return response.data;
};

const api_set_options = async (jwt, options) => {
  const response = await axios({
    method: "post",
    url: api_url + "/user/options/set",
    headers: { Authorization: jwt },
    data: {
      options: options,
    },
  });
  return response.data;
};
export { api_login, api_register, api_reauth, api_set_options };

// testEmail@gmail.com
// testPassword
