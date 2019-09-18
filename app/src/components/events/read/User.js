import React from 'react'

export default function User(props) {
  const user = props.user.user

  return (
    <div className='user'>
      {(user.image) ? <img src={user.image} /> : ''}
      
      <h6>{user.username}</h6>
      <p>email: {user.email}</p>
      <p>companyname: {user.companyname}</p>
      <p>role: {user.role}</p>
      
      {(user.userRoles.length > 0)
        ?  <div className='userRoles'>userRoles: {user.userRoles.map((i) => (i))} </div>
        : ''
      }

      {(user.authority.length > 0)
        ?  <div className='authority'>authority: {user.authority.map((i) => (i))} </div>
        : ''
      }

    </div>
  )
}
