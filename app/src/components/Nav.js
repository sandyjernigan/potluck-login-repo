import React from 'react'
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom'
// import components
import { Home, Events, EventByID, New } from './'

class Nav extends React.Component {
	constructor() {
		super()
		this.state = {
      errMsg: '', 
      shouldLogout: false, 
      goToHome: false
		}
	}

  handleLogout = async event => {
    localStorage.removeItem('token') 
    this.setState({ goToHome: true })
    document.location.href ='/login'
  }

  render() {

    if (this.state.goToHome) {
      return ( <div> You should be redirected to Login. 
        <br />
        Please Refresh your Page if nothing happens. </div>)
     }

    return (
      <div className="main">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/new">New Event</NavLink>
            <button className="btn btn-dark" type="button" onClick={this.handleLogout}>Logout</button>
          </nav>
        </header>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/events" exact render={props => <Events {...props} callLogout={this.handleLogout} />} />
        <Route exact path="/events/:id" render={props => <EventByID {...props} />} />
        <Route exact path="/new"  render={props => <New {...props} />} />
      </div>
    )
  }
}

export default withRouter((Nav))