import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Alert, Button, Form, Spinner } from "reactstrap";
import { Input, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
// import actions for Hooks
import { useCreateData, useHandleError } from '../Data'

// import some Base Input
import { baseInput, handleError } from '../../../baseInput'
const baseUrl = baseInput.baseUrl

function Create(props) {

  const body = props.event

  // import hook function to add data
  const [isLoading, errMsg, fetchedData] = useCreateData(baseUrl, body, [body])

	if (isLoading) {
    // fetching data
		return (
      <div className='loading'>
        <Spinner color="warning" style={{ width: '5rem', height: '5rem' }} />{' '}
        <p>Loading ... </p>
      </div>
    )
  }

  const handleErrorResult = handleError(errMsg)

  if (errMsg) {
    // This happens if an Error message is returned
    const handleErrorResult = handleError(errMsg)

    return (
      <div id="loginError" className="alert alert-danger" role="alert"> 
        {handleErrorResult.map((x, i) => ( 
          <p key={i} >{x}</p>
        ))}
      </div> 
    )
  }
  const { name, date, description, budget, companyname } = props.event

  return (
    <div className="creating">
      <h1>Event Created</h1>

      <h3>{name}</h3>

      <div className='date'>{date}</div>

      <div className='description'>
        <h5>Description</h5>
        <p>{description}</p>
      </div>

      <div className='budget'>
        <h5>Budget</h5>
        <p>{budget}</p>
      </div>

      <div className='companyname'>
        <h5>Company Name</h5>
        <p>{companyname}</p>
      </div>

      {(handleErrorResult)
      ? <div id="loginError" className="alert alert-danger" role="alert"> 
          {handleErrorResult.map((x, i) => ( 
          <p key={i} >{x}</p>
          ))}
        </div>
      : ''
      }

      <div><Link to={`/events`}>Go Back to Events</Link></div>
    </div>
  )
}
export default Create