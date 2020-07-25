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

export { api_login };

// testEmail@gmail.com
// testPassword
