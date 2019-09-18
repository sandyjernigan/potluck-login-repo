import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Spinner } from 'reactstrap';

// import actions for Hooks
import { useUpdateData } from '../Data'

// import some Base Input
import { baseInput, handleError } from '../../../baseInput'
const baseUrl = baseInput.baseUrl

export default function UpdateAction(props) {
  // Set Hooks state
  const [updateEvent, setUpdateEvent] = useState(false)

  const event = props.event
  // Use action to update Event
  const [isLoading, errMsg, eventUpdated] = useUpdateData(baseUrl, event.eventid, event, [])
  
	if (isLoading) {
    // fetching data
		return (
      <div className='loading'>
        <Spinner color="warning" style={{ width: '5rem', height: '5rem' }} />{' '}
        <p>Loading ... </p>
      </div>
    )
  }

  if (errMsg) {
    // This happens if an Error message is returned from GetData
    return (
      <div className="alert alert-danger" role="alert">
        <p>Error Happened ... </p>
        <p>{errMsg.message}</p>
        <p><strong>Note: </strong>User can only update events that are assigned to the User.</p>
        <Link to={`/events/`}>Go back to Events</Link>
      </div>
    )
  }

  if (eventUpdated) {
    // Event updated
		return (
      <div className="delete">
        <h3>Event Updated. {props.event.eventid}</h3>
        <Link to={`/events/`}>Go back to Events</Link>
      </div>
    )
  }

  return (
    <div className="update">
      <h3>Event to be Updated.</h3>
      <p>{props.event.name}</p>
    </div>
  )
}
