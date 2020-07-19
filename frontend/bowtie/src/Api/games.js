import axios from "axios";
import { api_url } from "./config";

let  results = {}
const make_games_search = () => {
  let cancel;

  return async (jwt, query, page) => {
    if (cancel) {
      console.log("cancel")
      cancel.cancel();
    }
    cancel = axios.CancelToken.source();
    try {
      if (results[query]){
        return results[query]
      }
      const response = await axios(
        {
          method: "post",
          url: api_url + "/games/search",
          headers: { Authorization: jwt },
          data: {
            query: query,
            page: page,
          },
        },
        { cancelToken: cancel.token }
      );
      results = response.data
      const result = response.data;
      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log("Request canceled", error.message);
      } else {
        // Handle usual errors
        console.log("Something went wrong: ", error.message);
      }
    }
  };
};

export const games_search = make_games_search();
