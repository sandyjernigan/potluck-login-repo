import React from 'react'
import Purchase from './Purchase'

export default function Task(props) {
  return (
    <div className='task'>
      <h6>{props.task.name}</h6>
      <p>Assigned: {props.task.assigned}</p>
      <p>Category: {props.task.category}</p>
      <p>Completed: 
        {props.task.completed ? ' Yes' : ' No'}</p>
      <p>Description: {props.task.description}</p>
      <p>Due Date: {props.task.duedate}</p>
      <p>Purchase: 
        {(props.task.purchase.length > 0)
          ? props.task.purchase.map((i) => {
              return ( <Purchase key={i.purchaseid} purchase={i} /> )})
          : ' none'
        }
      </p>
    </div>
  )
}
