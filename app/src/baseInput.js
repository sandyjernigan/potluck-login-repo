import React from 'react'

export const baseInput = {
  baseUrl: `https://corporate-event-planner.herokuapp.com`,
  // Models
  models: {
    // User
    user: {
      "userid": 0,
      "username": "JakeTheDude",
      "email": "JakeTheDude@Email.com",
      "companyname": "DevelopersAnonymous",
      "role": "Backend B.A.",
      "userRoles": [],
      "image": null,
      "authority": []
    },
    // Event
    event: {
      "eventid": 9,
      "name": "Teambuilding Trip",
      "description": "Take the IT department on a teambuilding getaway in Hawaii",
      "date": "8-23-2019",
      "budget": "$10,000",
      "companyname": "Company A",
      "tasklist": [
        // tasks ...
      ],
      "userList": [
        // list of objects each with a user object nested inside at key "user"
        {
          "user": {
            // User object
          }
        }
      ]
    },
    // Task
    task: {
      "taskid": 17,
      "name": "Reservations",
      "description": "Make Hotel Reservations",
      "assigned": "John",
      "completed": false,
      "duedate": "8-1-2019",
      "category": "Service",
      "purchase": [
        {
          "purchaseid": 27,
          "description": "Reserve Hotel Rooms",
          "vendorname": "Mariott Hotel",
          "pointofcontact": "Judy",
          "email": "judyisawesome@email.com",
          "price": "$3,000",
          "qty": 0
        }
      ]
    }
  },
  // Endpoints
  userEndpoints: {
    // Signup
    signup: {
      endpoint: '/signup',
      type: 'POST',
      description: 'Sign up a new user',
      expectedInput: {
        // username and email must be unique
        "username": "testuser",
        "email": "JohnnyGuitar@Email.com",
        "password": "password",
        "role": "Air Guitar Instructor",
        "companyname": "test company",
      }
    },
    // Login
    login: {
      endpoint: '/oauth/token',
      type: 'POST',
      description: 'Gets authentication token for user with given credentials',
      expectedInput: {
        "username": "SomeUser",
        "password": "TheirPassword"
      },
      sample_request: function () {
        // const body = `grant_type=password&username=${username}&password=${password}`;

        // axios.post(`${BASE_URL}/oauth/token`, body, {
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //     Authorization: `Basic ${window.btoa("lambda-client:lambda-secret")}`
        //   }
        // })
      }
    },
    // Logout
    logout: {
      endpoint: '/oauth/revoke-token',
      type: 'GET',
      description: 'Back end will kill any active tokens for user'
    },
    // Update-User
    updateUser: {
      endpoint: '/user/{id}',
      type: 'PUT',
      description: 'Update user with given id',
      expectedInput: {
        "username": "testuser",
        "email": "JohnnyGuitar@Email.com",
        "password": "password",
        "role": "Air Guitar Instructor",
        "companyname": "test company"
      }
    },
    // Delete-User
    deleteUser: {
      endpoint: '/user/{id}',
      type: 'DELETE',
      description: 'Delete user with given id',
    }
  }, 
  dataEndpoints: {
    // Get All Events
    getAll: {
      endpoint: '/events/all',
      type: 'GET',
      description: 'Get a list of all event objects'
    },
    // Get Event
    getByID: { // will only fetch and event if it belongs to active user
      endpoint: '/events/{id}',
      type: 'PUT',
      description: 'Update user with given id'
    },
    // Add Event
    addData: { // keeps giving weird auth errors
      endpoint: '/events/new',
      type: 'POST',
      description: 'Update user with given id',
      expectedInput: {
        "name": "Big ole Fun Time",
        "description": "We're gonna have a big ole funt ime",
        "date": "8/23/2019",
        "budget": "$10,000",
        "companyname": "Company A",
        "tasklist": [
          {
            "name": "Reservations",
            "description": "Make Hotel Reservations",
            "assigned": "John",
            "completed": false,
            "duedate": "8-1-2019",
            "category": "Service",
            "purchase": [
              {
                "description": "Reserve Hotel Rooms",
                "vendorname": "Mariott Hotel",
                "pointofcontact": "Judy",
                "email": "judyisawesome@email.com",
                "price": "$3,000",
                "qty": 0
              }
            ]
          },
          {
            "name": "RSVP",
            "description": "Have all employees either RSVP or opt out",
            "assigned": "Michelle",
            "completed": false,
            "duedate": "7-15-2019",
            "category": "Task",
            "purchase": []
          }
        ],
        // This should be empty, currently logged in user will be set added to list
        // "userList": []
      }
    },
    // Update Event
    updateData: {
      endpoint: '/events/edit/{id}',
      type: 'PUT',
      description: 'Update event with given id. Use this to access and update and sub categories like tasklist or userlist if only given one field ex. "tasklist" it will read the data from that field and try to use it to update object',
      expectedInput: {
        "name": "Big ole Fun Time",
        "description": "We're gonna have a big ole funt ime",
        "date": "8-23-2019",
        "budget": "$10,000",
        "companyname": "Company A",
        "tasklist": [
          {
            "name": "Reservations",
            "description": "Make Hotel Reservations",
            "assigned": "John",
            "completed": false,
            "duedate": "8-1-2019",
            "category": "Service",
            "purchase": [
              {
                "description": "Reserve Hotel Rooms",
                "vendorname": "Mariott Hotel",
                "pointofcontact": "Judy",
                "email": "judyisawesome@email.com",
                "price": "$3,000",
                "qty": 0
              }
            ]
          },
          {
            "name": "RSVP",
            "description": "Have all employees either RSVP or opt out",
            "assigned": "Michelle",
            "completed": false,
            "duedate": "7-15-2019",
            "category": "Task",
            "purchase": []
          }
        ],
        "userList": [
          {
            "user": { // user object
            }
          }
        ]
      }
    },
    // Delete Event
    deleteData: { // will only delete an event if it belongs to active user
      endpoint: '/events/delete/{eventid}',
      type: 'DELETE',
      description: 'Deletes event with given ID'
    }
  }
}

// Handle Error
export const handleError = (error) => {
  if(error) {
    const errorMessage = ['Error occured: ']
    if (error.status) {
      errorMessage.push(`Status: ${error.status} ${error.statusText}`)
    }
    if (error.message) {
      errorMessage.push(`Message: ${error.message}`)
    }
    if (error.data) {
      if (error.data.error) {
        errorMessage.push(`Error: ${error.data.error}`)
      }
      if (error.data.error_description) {
        errorMessage.push(`Description: ${error.data.error_description}`)
      }
    }
    if (error.config) {
      if (error.config.url) {
        errorMessage.push(`URL: ${error.config.url}`)
      }
      // if (error.config.data) {
      //   errorMessage.push(`with ${error.config.data}`)
      // }
    }
    
    return ( errorMessage );       
  }
} 