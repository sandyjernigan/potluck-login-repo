import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function(props) {
	const {
		component: Component,
		...rest // everything except "component"
	} = props

	// the rest variable === { exact: true, path: "/" }
	// excludes "component"
	return (
		<Route {...rest} render={() => {
			// get a value saved in the browser's local storage
			const token = localStorage.getItem('token')

			return token
				? <Component />
				: <Redirect to="/login" />
		}} />
	)
}