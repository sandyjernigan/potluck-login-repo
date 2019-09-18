import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILED } from '../actions/';

const initialState = {
  isLoading: false,
  isSuccess: false,
  errMsg: null
}

// Our reducer that handles the action(s)
export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
		case REGISTER_START: {
			return {
				...state,
				isLoading: true,
			}
		}
		case REGISTER_SUCCESS: {
			return {
				...state,
        isLoading: false,
        isSuccess: true,
				errMsg: null,
			}
		}
		case REGISTER_FAILED: {
			return {
				...state,
				isLoading: false,
        isSuccess: false,
				errMsg: action.payload,
			}
		}
    default:
      return state;
  }
};
