import React from 'react'

function User({username}) {
    console.log('user component is running')
  return (
    <div className='border p-6 border-blue-500 m-3 rounded-sm'>
    <h1>User component</h1>
    <h1>Show user name : {username}</h1>
  </div>
  )
}

export default User
