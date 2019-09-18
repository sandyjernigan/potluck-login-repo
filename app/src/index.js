// import React dependancies
	import React from 'react';
	import ReactDOM from 'react-dom';
	import { BrowserRouter, withRouter } from 'react-router-dom'
	import { createStore, applyMiddleware, compose } from 'redux'
	import { Provider } from 'react-redux'
	import thunk from 'redux-thunk'
// import css
	import './css/index.css';
	import 'bootstrap/dist/css/bootstrap.min.css';
// import App
	import App from './components/App';
//import reducers
	import reducers from './reducers'

// Log the State and report to console
const logger = (store) => (next) => (action) => {
	console.log('Prev State', store.getState())
	console.log('Action', action)
	
	// moves to the next middleware function
	next(action)

	console.log('New State', store.getState())
}

const store = createStore(
	reducers,
	// compose multiple middleware flows together into one flow
	compose(
		//applyMiddleware(thunk, logger), // Taking the logger out to clean up console.log 
		applyMiddleware(thunk, logger),
		// redux dev tools middleware
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
	),
)

const AppWithRouter = withRouter(App)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppWithRouter />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
)