import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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

  // import useNavigate which will help you to move to another page/component when someone succesfully 
  // enter the correct det5ails 
  const navigate=useNavigate();

  

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
        // setSuccess(response.data.message)
        localStorage.setItem("user",JSON.stringify(response.data.user))
        navigate("/")
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
  
            
            <button type="submit" className="cta w-100">
  <span className="span">Submit</span>
  <span className="second">
    <svg
      width="50px"
      height="20px"
      viewBox="0 0 66 43"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path
          className="one"
          d="M40.1543933,3.89485454 ..."
          fill="#FFFFFF"
        ></path>
        <path
          className="two"
          d="M20.1543933,3.89485454 ..."
          fill="#FFFFFF"
        ></path>
        <path
          className="three"
          d="M0.154393339,3.89485454 ..."
          fill="#FFFFFF"
        ></path>
      </g>
    </svg>
  </span>
</button>
          </form>
        </div>
      </div>
    </>
  );
  
}

export default Signin