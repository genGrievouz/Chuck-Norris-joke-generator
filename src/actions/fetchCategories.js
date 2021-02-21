import axios from "axios";
import { fetchCategoriesFailure, fetchCategoriesSuccess, fetchCategoriesRequest} from "./action";

export const fetchCategories = () => {
    return (dispatch) => {
      dispatch(fetchCategoriesRequest())
      axios
        .get('https://api.chucknorris.io/jokes/categories')
        .then(response => {
          const categories = response.data
          dispatch(fetchCategoriesSuccess(categories))
        })
        .catch(error => {
          dispatch(fetchCategoriesFailure(error.message))
        })
    }
}