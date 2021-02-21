const initialState = {
    loading: false,
    categories: [],
    error: null
  }
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_CATEGORIES_REQUEST":
        return {
          ...state,
          loading: true
        }
      case "FETCH_CATEGORIES_SUCCESS":
        return {
          loading: false,
          categories: action.payload,
          error: null
        }
      case "FETCH_CATEGORIES_FAILURE":
        return {
          loading: false,
          categories: [],
          error: action.payload
        }
      default: return state
    }
  }
  
export default categoriesReducer