import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { Spinner } from 'reactstrap';

// import actions for Hooks
import { useDeleteData } from '../Data'

// import some Base Input
import { baseInput, handleError } from '../../../baseInput'
const baseUrl = baseInput.baseUrl

export default function DeleteAction(props) {
  // Set Hooks state
  const [deleteEvent, setDeleteEvent] = useState(false)

  const eventid = props.eventid
  const [isLoading, errMsg, eventDeleted] = useDeleteData(baseUrl, eventid, [])
  
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
    console.log(errMsg)
    return (
      <div className="alert alert-danger" role="alert">
        <p>Error Happened ... </p>
        <p>{errMsg.message}</p>
      </div>
    )
  }

  if (eventDeleted) {
    // Event deleted
		return (
      <div className="delete">
        <h3>Event Deleted.</h3>
        <p><a href="/events">Go to Events</a></p>
      </div>
    )
  }

  return (
    <div className="delete">
      <h3>Event to be Delete.</h3>
      <p>{props.eventid}</p>
    </div>
  )
}
