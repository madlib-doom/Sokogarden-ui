import React, { useState } from 'react'

const Signin = () => {
  // Declare hooks here
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState('')
  return (
    <div>
     <div className="row justify-content-center mt-4" >
      <div className="col-md-6 card shadow p-4" >
      <h1>  Signin Page</h1>
      <form >
        <input type="email"
        placeholder='Enter your email here'
        required
        className='form-control' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/> <br />
        {email}
        <input type="password"
        placeholder='Enter your password here'
        required
        className='form-control'
        value={password}
        onChange={(e)=>setPassword(e.target.value)} /> <br />
        {password}
        <button type='submit ' className='btn btn-outline-success'>Submit</button>
      </form>
      </div>
     </div>
        </div>
  )
}

export default Signin