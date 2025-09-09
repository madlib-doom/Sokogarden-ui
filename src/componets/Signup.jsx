import React, { useState } from 'react'

const Signup = () => {
  // Hooks to capture the different state of our application
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState("");
  const[password,setPassword]=useState('');
  return (
    <div className='row justify-content-center mt-4'> 
     <div className="col-md-6 card shadow p-4">
     <h1> Signup Page</h1><hr />

     <form >
      <input type="text" 
      className='form-control' 
      placeholder='Enter the username here'
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      required/><br />
      {/* {username} */}

      <input type="email" 
      className='form-control'
      placeholder='Enter email adress here' required 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
      
      <br />
      {/* {email} */}
      <input type="number"
      className='form-control'
      placeholder='Enter your phone number here' 
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      required/> <br />
      {/* {phone} */}

      
      <input type="password"
      className='form-control'
      placeholder='Enter your password here' 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      required 
      /> <br />
      {/* {password} */}

      <button type='submit' className='btn btn-success'>Signup</button>


     </form>
     </div>
    </div>
  )
}

export default Signup