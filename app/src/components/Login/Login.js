import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions'
import { Button, Form, FormGroup, Input, Spinner } from "reactstrap";

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			errorMessage: ''
		}
	}

	handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

	handleSubmit = (evt) => {
		evt.preventDefault()
		const { username, password } = this.state
		this.props.login(username, password)
	} 

	render() {
		const { username, password, checkToken } = this.state
    const { isLoading, errMsgLogin, successfulLogin } = this.props
    
    // if successful then redirect ...
		if (successfulLogin) { 
			// this.props.history.push("/") 
			document.location.href ='/'
		}

		// if loading
		if (isLoading) {
			return (
        <div className='loading'>
          <Spinner color="warning" style={{ width: '5rem', height: '5rem' }} />{' '}
          <p>Loading ... </p>
        </div>
      )
		}
		
    // if Error
    if (errMsgLogin) {
			// Error Occured
			console.log(errMsgLogin)
			const errorMessage = ['Error occured: ']
			if (errMsgLogin.data) {
				if (errMsgLogin.status) {
					errorMessage.push(`Status: ${errMsgLogin.status} ${errMsgLogin.statusText}`)
				}
				if (errMsgLogin.data.error) {
					errorMessage.push(`Error: ${errMsgLogin.data.error}`)
				}
				if (errMsgLogin.data.error_description) {
					errorMessage.push(`Description: ${errMsgLogin.data.error_description}`)
				}
				if (errMsgLogin.config.url) {
					errorMessage.push(`URL: ${errMsgLogin.config.url}`)
				}
				if (errMsgLogin.config.data) {
					errorMessage.push(`with ${errMsgLogin.config.data}`)
				}
			}

			// Return errorMessage = JSON.stringify(errMsgLogin)
			
      return ( 
				<div id="loginError" className="alert alert-danger" role="alert"> 
					{errorMessage.map((x) => ( 
						<p>{x}</p>
					))}
					<button type="button" onClick={() => { document.location.href ='/login' }} >Reload</button>
				</div> ); 
		}

		return (
			<div className="Login">
			  <h1>Login</h1>
				<div id="loginError"></div>
		
			  <Form onSubmit={this.handleSubmit}>
				<FormGroup>
				  <Input type="text" name="username" placeholder="Username" autoComplete="username" 
					value={username} onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
				  <Input type="password" name="password" placeholder="Password" autoComplete="current-password" 
					value={password} onChange={this.handleChange} />
				</FormGroup>
		
						{this.props.isLoading
							? <p>Logging in...</p>
							: <Button type="submit" disabled={isLoading} block={true}>Login</Button>}
			  </Form>
		
			  <Link to='/register'> Register a New User </Link>
		
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  isLoading: state.loginReducer.isLoading,
  successfulLogin: state.loginReducer.successfulLogin,
	errMsgLogin: state.loginReducer.errMsg,
})

const mapDispatchToProps = { login }

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Login)
)