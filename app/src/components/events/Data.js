import React, { useState, useEffect } from 'react'
import axios from 'axios'

// CRUD -- create, read, update and delete

// Create - Add an event
export const useCreateData = (url, body, dependencies) => {

  // initial State  
  const [isLoading, setIsLoading] = useState(false)
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }

    axios.post(`${url}/events/new`, body, { headers })
    .then((res) => {
      setIsLoading(false)
      setErrMsg(null)
    })
    .catch((err) => {
      setIsLoading(false)
      setErrMsg(err)
    })
    setIsLoading(false)
  }, [] )

  return [isLoading, errMsg]
}

// Read - Get a list of all event objects
export const useReadData = (url, dependencies) => {

  // initial State  ../../actions
  const [isLoading, setIsLoading] = useState(false)
  const [fetchedData, setFetchedData] = useState(null)
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }

    axios.get(`${url}/events/all`, { headers })
    .then((res) => {
      setIsLoading(false)
      setErrMsg(null)
      setFetchedData(res.data)
    })
    .catch((err) => {
      setIsLoading(false)
      setErrMsg(err)
    })
  }, [] )


  return [isLoading, errMsg, fetchedData]
}

// Update - Description: 'Update event with given id. 
// Use this to access and update and sub categories like tasklist 
// or userlist if only given one field ex. "tasklist" it will read 
// the data from that field and try to use it to update object'
export const useUpdateData = (url, id, body, dependencies) => {

  // initial State
  const [isLoading, setIsLoading] = useState(false)
  const [eventUpdated, setEventUpdated] = useState(false)
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }

    axios.put(`${url}/events/edit/${id}`, {body}, { headers })
    .then((res) => {
      setIsLoading(false)
      setEventUpdated(true)
      setErrMsg(null)
    })
    .catch((err) => {
      setEventUpdated(false)
      setIsLoading(false)
      setErrMsg(err)
    })
  }, dependencies )


  return [isLoading, errMsg, eventUpdated]
}

// Delete - will only delete an event if it belongs to active user
export const useDeleteData = (url, eventid, dependencies) => {

  // initial State  ../../actions
  const [eventDeleted, setEventDeleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }

    // Still getting 404 Error
    axios.delete(`${url}/events/delete/${eventid}`, { headers })
    .then((res) => {
      setIsLoading(false)
      setEventDeleted(true)
      setErrMsg(null)
    })
    .catch((err) => {
      setIsLoading(false)
      setEventDeleted(false)
      setErrMsg(err)
    })
  }, dependencies )


  return [isLoading, errMsg, eventDeleted]
}