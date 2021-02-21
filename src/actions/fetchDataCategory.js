import axios from "axios";
import { fetchJokesFailure, fetchJokesSuccess, fetchJokesRequest} from "./action";

export const fetchJokes = (x) => {
    return (dispatch) => {
      dispatch(fetchJokesRequest())
      axios
        .get("https://api.chucknorris.io/jokes/random?category=" + x)
        .then(response => {
          const jokes = response.data
          dispatch(fetchJokesSuccess(jokes))
        })
        .catch(error => {
          dispatch(fetchJokesFailure(error.message))
        })
    }
}