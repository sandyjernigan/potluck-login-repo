import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Alert, Button, Badge, Form, InputGroup, 
  Spinner, InputGroupText, InputGroupAddon, Input } from "reactstrap"
import { Task, User, Update, Delete } from '../..'
// import actions for Hooks
import { useReadData } from '../Data'

// import some Base Input
import { baseInput } from '../../../baseInput'
const baseUrl = baseInput.baseUrl

function EventByID(props) {
  // Set Hooks state
  const [eventByID, setEvent] = useState({ 
    eventid: 0,
    name: "",
    description: "",
    date: "",
    budget: "",
    companyname: "",
    tasklist: [ ], // tasks are objects
    userList: [ ] // list of objects each with a user object nested inside at key "user"
  })
  const [updateEvent, setUpdateEvent] = useState(false)
  const [deleteEvent, setDeleteEvent] = useState(false)
  const [displayTaskList, setdisplayTaskList] = useState('hidden')
  const [displayUserList, setdisplayUserList] = useState('hidden')

  const id = props.match.params.id;

  const toggleTask = () => { (displayTaskList == 'hidden') ? setdisplayTaskList('') : setdisplayTaskList('hidden') }
  const toggleUser = () =>  { (displayUserList == 'hidden') ? setdisplayUserList('') : setdisplayUserList('hidden') }

  const [isLoading, errMsg, fetchedData] = useReadData(baseUrl, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    return <Redirect to='/login' />
  }

  const handleChange = e => {
    setEvent({
        ...eventByID,
        [e.target.name]: e.target.value
    });
  }
  
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
        <p>{errMsg.message} </p>
          {/* If Error is Status 401, offer Logout Button. */}
          {(errMsg.message.includes("status code 401"))
            ? <button type="button" onClick={handleLogout}>Logout</button>
            : ''}
      </div>
    )
  }
  
  if (fetchedData) {
    const event = fetchedData.find(i => String(i.eventid) === id)

    if (updateEvent) {
      // fetching data
      return <Update event={event} /> ;
    }
  
    if (deleteEvent) {
      // fetching data
      return <Delete event={event} /> ;
    }
    
    return (
      <div className="card">
        <header>{event.name}</header>

        <div className='buttons'>
          {/* <Badge href="#" color="dark" onClick={() => {setUpdateEvent(true)}}>Edit</Badge> */}
          <Button color="dark" size="sm" onClick={() => {setUpdateEvent(true)}}>Edit</Button>
          <Button color="dark" size="sm" onClick={() => {setDeleteEvent(true)}}>Delete</Button>
        </div>
        

        <div className='date'>{event.date}</div>

        <div className='description'>
          <h5>Description</h5>
          <p>{event.description}</p>
        </div>

        <div className='budget'>
          <h5>Budget</h5>
          <p>{event.budget}</p>
        </div>

        <div className='companyname'>
          <h5>Company Name</h5>
          <p>{event.companyname}</p>
        </div>

        <div className='tasklist'>
          <h5 onClick={toggleTask} >Task List</h5>
            <div id='tasklistbox' className={displayTaskList}>
              {(event.tasklist) 
              ? event.tasklist.map((x, i) => {
                return ( <Task key={i} task={x} /> )})
              : 'No Tasks'
              }
            </div>
        </div>

        <div className='userList'>
          <h5 onClick={toggleUser} >User List</h5>
            <div id='userlistbox' className={displayUserList}>
              {(event.userList) 
              ? event.userList.map((x, i) => {
                return ( <User key={i} user={x} /> )})
              : 'No User List'
              }
            </div>
        </div>

      </div>
    )
  }

  return <div>App is Loading ... </div>;
}
export default EventByID