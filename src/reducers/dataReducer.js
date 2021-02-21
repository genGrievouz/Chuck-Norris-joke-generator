const initialState = {
    loading: false,
    jokes: [],
    error: null
  }
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_JOKES_REQUEST":
        return {
          ...state,
          loading: true
        }
      case "FETCH_JOKES_SUCCESS":
        return {
          loading: false,
          jokes: action.payload,
          error: null
        }
      case "FETCH_JOKES_FAILURE":
        return {
          loading: false,
          jokes: [],
          error: action.payload
        }
      default: return state
    }
  }
  
export default dataReducer