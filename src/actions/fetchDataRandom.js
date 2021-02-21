import axios from "axios";
import { fetchJokesFailure, fetchJokesSuccess, fetchJokesRequest} from "./action";

export const fetchJokeRandom = () => {
    return (dispatch) => {
      dispatch(fetchJokesRequest())
      axios
        .get('https://api.chucknorris.io/jokes/random')
        .then(response => {
          const jokes = response.data
          dispatch(fetchJokesSuccess(jokes))
        })
        .catch(error => {
          dispatch(fetchJokesFailure(error.message))
        })
    }
}