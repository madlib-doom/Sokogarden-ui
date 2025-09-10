import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
  // Hooks to capture the different state of our application
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState("");
  const[password,setPassword]=useState('');

  // Add three addditional hookis to manage state of applicxatiom

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("");
  // Create a function that handle sthe submit action
  const submit=async(e)=>{
    // Prevent the site from reloading when person clicks on the sigup button
    e.preventDefault();
    // update the loading hook with new message that the user shal see ont he browser
    setLoading("Please wait as we upload your details")

    try{
      // create a form data object that will hold all the data from the hooks
const data=new FormData();
// add the different details into the new object created
data.append("username",username)
data.append("email",email)
data.append("phone",phone)
data.append("password",password)
// post your data to the backend api
const response = await axios.post('https://aarondev.pythonanywhere.com/api/signup',data)
// set back the loading hook to empty
setLoading("")

// By presumption we assume the registration process went on well therefore update the success hook with a new mesage
setSuccess(response.data.message)
// clear the hooks for them to take in new data
setUsername("")
setEmail("")
setPhone("")
setPassword('')
    }
    catch(error){
      // set loading hook back to default
      setLoading('')

      // Incase there was an error encounterd during the registration process update the error hook
      // with a messgae 
      setError("Sorry,Registration not succesful ,an error occured...")

    }
  }
  return (
    <div className='row justify-content-center mt-4'> 
     <div className="col-md-6 card shadow p-4">
     <h1> Signup Page</h1><hr />
     {loading}
    {success}
    {error}

     <form onSubmit={submit} >
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