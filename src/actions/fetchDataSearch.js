import axios from "axios";
import { fetchJokesFailure, fetchJokesSuccess, fetchJokesRequest} from "./action";

export const fetchJokesSearch = (x) => {
    return (dispatch) => {
      dispatch(fetchJokesRequest())
      axios
        .get("https://api.chucknorris.io/jokes/search?query=" + x)
        .then(response => {
          const max = response.data.total;
          const jokes = response.data.result[randomNumber(0,max)];
          max === 0 ? alert("Joke not found") : dispatch(fetchJokesSuccess(jokes));
        })
        .catch(error => {
          dispatch(fetchJokesFailure(error.message));
          alert("size must be between 3 and 120");
        })
    }
}

const randomNumber = (min, max) => {
  const r = Math.random()*(max - min) + min;
  return Math.floor(r);
}
