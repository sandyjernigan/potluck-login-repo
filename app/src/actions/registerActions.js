// we'll need axios
import axios from 'axios'

// Login action types
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'

// action creator for login
export function register(user) {
	return (dispatch) => {
		dispatch({ type: REGISTER_START })

		const BASE_URL = `https://corporate-event-planner.herokuapp.com`

		return axios.post(`${BASE_URL}/signup`, user)
			.then((res) => {
			  console.log("Reigster Success")
			  console.log(res)
			  dispatch({ type: REGISTER_SUCCESS })
			})
			.catch((err) => {
			  console.log("Register Failed")
			  console.log(err)
			  const errResult = err.response.data.message
			  let payload = ""
	
			  // Check if Empty
			  if (!errResult) { 
				payload = "No Result for Error."
			  } else {
				// Set Error Message
				payload = err.response.data.status + ": " + errResult
	
				if (errResult.includes("could not execute statement")) {
				  payload = "could not execute statement"
	
				  // Check the Error
				  if (errResult.includes("ConstraintViolationException")) {
					  payload = "Constraint Violation Exception"
	
					// Check which value is causing error
					if (errResult.includes("PUBLIC.USER(EMAIL)")) {
					  payload = "Email already registered."
					}
					if (errResult.includes("PUBLIC.USER(USERNAME)")) {
					  payload = "Username already registered."
					}
				  }
				}
        }
        
        dispatch({ type: REGISTER_FAILED, payload })
			})
		}
}