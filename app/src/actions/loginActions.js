// we'll need axios
import axios from 'axios'

// Login action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

// Logout action types
export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'

// action creator for login
export function login(username, password) {
	return (dispatch) => {
		dispatch({ type: LOGIN_START })

		const BASE_URL = `https://corporate-event-planner.herokuapp.com`
		const body = `grant_type=password&username=${username}&password=${password}`

		return axios.post(`${BASE_URL}/oauth/token`, body, {
			headers: {
			  "Content-Type": "application/x-www-form-urlencoded",
			  Authorization: `Basic ${window.btoa("lambda-client:lambda-secret")}`
			}})
			.then((res) => {
				localStorage.setItem('token', res.data.access_token)
				dispatch({ type: LOGIN_SUCCESS })
			})
			.catch((err) => {
				const payload = err.response ? err.response : err
				dispatch({ type: LOGIN_FAILED, payload })
			})
	}
}

// action creator for logout
export function logout() {
	return (dispatch) => {
		dispatch({ type: LOGOUT_START })

		const BASE_URL = `https://corporate-event-planner.herokuapp.com`

		return axios.get(`${BASE_URL}/oauth/revoke-token`)
			.then((res) => {
				dispatch({ type: LOGOUT_SUCCESS })
			})
			.catch((err) => {
				const payload = err.response ? err.response.data : err
				dispatch({ type: LOGOUT_FAILED, payload })
			})
	}
}