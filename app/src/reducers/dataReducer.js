import { GET_START, GET_SUCCESS, GET_FAILED, GET_BY_ID } from "../actions/dataActions";

const initialState = {
	data: [],
	dataByID: {},
  isLoading: false,
  errMsg: null
}

// Our reducer that handles the action(s)
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // action type FETCHING
    case GET_START: {
			return {
				...state,
				isLoading: true,
			}
    }
    // action type SUCCESS
		case GET_SUCCESS: {
			return {
				...state,
				data: action.payload,
				isLoading: false,
				errMsg: null
			}
		}
    // action type FAILURE
		case GET_FAILED: {
			return {
				...state,
				isLoading: false,
				errMsg: action.payload,
			}
		}
	// action type SUCCESS
		case GET_BY_ID: {
			return {
				...state,
				dataByID: action.payload,
				isLoading: false,
				errMsg: null
			}
		}
    default:
      return state;
  }
};
