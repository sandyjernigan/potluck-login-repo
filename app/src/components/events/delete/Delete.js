import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import DeleteAction from './DeleteAction'

export default function Delete(props) {
  // Set Hooks state
  const [deleteEvent, setDeleteEvent] = useState(false)
  const [DonotDeleteEvent, setDonotDeleteEvent] = useState(false)

  const eventid = props.event.eventid

	if (deleteEvent) {
    // Delete data
    return <DeleteAction eventid={eventid} />
  }

	if (DonotDeleteEvent) {
    // fetching data
		return <Redirect to='/events' />
  }

  return (
    <div className="delete">
      <h3>{props.event.name}</h3>
      <p>Are you sure you want to delete, {props.event.name}?</p>

      <div>
        <button type="button" onClick={() => {setDeleteEvent(true)}}>Yes</button>
        <button type="button" onClick={() => {setDonotDeleteEvent(true)}}>No</button>
      </div> 
    </div>
  )
}
