import {
    FETCH_JOKES_FAILURE,
    FETCH_JOKES_REQUEST,
    FETCH_JOKES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
} from './actionType.js'

export const fetchJokesRequest = () => {
    return {
      type: FETCH_JOKES_REQUEST
    }
  }
  
  export const fetchJokesSuccess = jokes => {
    return {
      type: FETCH_JOKES_SUCCESS,
      payload: jokes
    }
  }
  
  
  export const fetchJokesFailure = error => {
    return {
      type: FETCH_JOKES_FAILURE,
      payload: error
    }
  }

  export const fetchCategoriesRequest = () => {
    return {
      type: FETCH_CATEGORIES_REQUEST
    }
  }
  
  export const fetchCategoriesSuccess = categories => {
    return {
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories
    }
  }
  
  export const fetchCategoriesFailure = error => {
    return {
      type: FETCH_CATEGORIES_FAILURE,
      payload: error
    }
  }
  