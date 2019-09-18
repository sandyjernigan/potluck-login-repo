// we'll need axios
import axios from 'axios'

// import some Base Input
import { baseInput } from '../baseInput'
const baseUrl = baseInput.baseUrl

// Data action types
export const GET_START = 'GET_START' // fetching data
export const GET_BY_ID = 'GET_BY_ID'// request fails 
export const GET_SUCCESS = 'GET_SUCCESS' // request successful
export const GET_FAILED = 'GET_FAILED'// request fails 

const headers = {
	Authorization: `Bearer ${localStorage.getItem('token')}`
}

// action creator to fetch Data
export function getData() {
	return (dispatch) => { 
		// enter the "loading" state
		dispatch({ type: GET_START })
		
		axios.get(`${baseUrl}/events/all`, { headers })
			.then((res) => {
				dispatch({ type: GET_SUCCESS, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_FAILED, payload: err })
			})
	}
}

// action creator to fetch Data for single (only if user has access to the event)
export function getByID(id) {
	return (dispatch) => { 
		dispatch({ type: GET_START })

		axios.get(`${baseUrl}/events/${id}`, { headers })
			.then((res) => {
				dispatch({ type: GET_BY_ID, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_FAILED, payload: err })
			})
	}
}