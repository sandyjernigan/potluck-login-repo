import React from 'react'

export default function Purchase(props) {
  return (
    <div className='purchase'>
      <p className='description'><strong>{props.purchase.description}</strong></p>
      <p>pointofcontact: {props.purchase.pointofcontact}</p>
      <p>Email: {props.purchase.email}</p>
      <p>price: {props.purchase.price}</p>
      <p>qty: {props.purchase.qty}</p>
      <p>vendorname: {props.purchase.vendorname}</p>
    </div>
  )
}
