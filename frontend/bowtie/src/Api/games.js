import axios from "axios";
import { api_url } from "./config";

let  gameResultsCache = {}

const make_games_search = () => {
  let cancel;
  return async (jwt, query, page) => {
    if (cancel) {
      cancel.cancel();
    }
    cancel = axios.CancelToken.source();
    try {
      if (gameResultsCache[query]){
        if (gameResultsCache[query][page])
          return gameResultsCache[query][page]
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
      let responseData = response.data
      if (responseData["status"] === "null"){
        responseData=null
      }
      if (!gameResultsCache[query])
        gameResultsCache[query] = {[page]:responseData};
      else
        gameResultsCache[query][page] = responseData
      const result = responseData;
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
