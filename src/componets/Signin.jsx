import axios from 'axios';
import React, { useState } from 'react'

import ("./stylings/Signup.css")
const Loader = () => {
  return (
    <div className="section-center">
      <div className="section-path">
        <div className="globe">
          <div className="wrapper">
            {[...Array(16)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Signin = () => {
  // Declare hooks here
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState('')

  

  // create three additional hooks
  const[loading,setLoading]=useState(false)
  const [error,setError]=useState("")
  const [success,setSuccess]=useState('')

  // implement a function to handle login process

  const submit=async (e)=>{
    e.preventDefault();

    // Update loading hook with a new message
    setLoading(true)

    try{
      // creaye a new form data
      const data=new FormData();
      // append data
      data.append("email",email)
      data.append("password",password)
//  await for a response from API   endpoint
      const response=await axios.post("https://aarondev.pythonanywhere.com/api/signin",data)
// set Loading to false so that it stops loading
      setLoading(false)
      console.log(response.data)

      if (response.data.message==="Login succesful"){
        setSuccess(response.data.message)
      }
      else{
        setError(response.data.message)
      }


    }
    catch(error){
      // seloading to false so that it stops loading
      setLoading(false)
      setError("An error occured..")

    }
    

  }
  return (
    <>
      {loading && <Loader />}
    
      {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
  
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
          <h2 className="text-center">Signin Form</h2>
          <hr />
  
          <form onSubmit={submit}>
            <input
              type="email"
              placeholder="Enter your email here"
              required
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
  
            <input
              type="password"
              placeholder="Enter your password here"
              required
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
  
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
  
}

export default Signin