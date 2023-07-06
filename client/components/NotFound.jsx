import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <div className='login-background' style={{display: 'flex', flexDirection: 'column'}}>
        <h2>404</h2>
        <p>Route can not be found</p>
        <Link to='/'>Home</Link>
    </div>
  )
}
