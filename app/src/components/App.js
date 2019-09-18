import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Alert } from "reactstrap";
// import CSS component 
import CSS from '../css/'
// import components
import { Nav, PrivateRoute, Login, Register } from './'

export default function App() {
  // Declare a new state variable
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => { setErrMsg(null) }, [])

  return (
      <div className="App">
        <CSS />

        {errMsg && <Alert content={errMsg} style="warning" />}

        <PrivateRoute path="/" component={Nav} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
  )
}