import React, { useState, useEffect } from 'react'
import { Alert, Button, Form, InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import UpdateAction from './UpdateAction'

// import some Base Input
import { baseInput, handleError } from '../../../baseInput'
const baseUrl = baseInput.baseUrl

function Update(props) {
  // Set Hooks state
  const [event, setEvent] = useState({ 
    eventid: 0,
    name: "",
    description: "",
    date: "",
    budget: "",
    companyname: "",
    tasklist: [ ], // tasks are objects
    userList: [ ] // list of objects each with a user object nested inside at key "user"
  })
  const [isLoading, setIsLoading] = useState(false)
  const [sendUpdate, setSendUpdate] = useState(false)

  const handleChange = e => {
    setEvent({
        ...event,
        [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    setEvent(props.event);
  }, [] )
  
  const handleSubmit = e => {
    e.preventDefault();

    // invoke form submit
    setIsLoading(true)
    setSendUpdate(true)
    return <UpdateAction event={event} />
  };

  const { eventid, name, date, description, budget, companyname } = event

	if (sendUpdate) {
    // update data
		return <UpdateAction event={event} />
  }

  return (
    <div className="update">
      <form onSubmit={handleSubmit}>
        {/* Event Name */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Event Name: </InputGroupText>
            </InputGroupAddon>
            <Input type="text" name="name" value={name} 
              placeholder="Name..."
              onChange={handleChange} />
          </InputGroup>

        {/* Date */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Date: </InputGroupText>
            </InputGroupAddon>
            <Input type="date" name="date" value={date} 
              placeholder="Date..."
              onChange={handleChange} />
          </InputGroup>

        {/* Description */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Description: </InputGroupText>
            </InputGroupAddon>
            <Input type="text" name="description" value={description} 
              placeholder="Description..."
              onChange={handleChange} />
          </InputGroup>

        {/* Budget */}
        <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Budget: </InputGroupText>
            </InputGroupAddon>
            <Input type="text" name="budget" value={budget} 
              placeholder="Budget..."
              onChange={handleChange} />
          </InputGroup>

        {/* Company Name */}
        <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Company Name: </InputGroupText>
            </InputGroupAddon>
            <Input type="text" name="companyname" value={companyname} 
              placeholder="Company Name..."
              onChange={handleChange} />
          </InputGroup>
        
        <Button type="submit" disabled={isLoading} block={true}>Update Event</Button>
      </form>

    </div>
  )
}
export default Update