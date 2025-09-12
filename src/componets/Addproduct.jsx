import axios from 'axios'
import React, { useState } from 'react'
import './stylings/Signup.css';




const Addproduct = () => {
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
  const[name,setName]=useState("")
  const[description,setDescription]=useState("")
  const[cost,setCost]=useState("")
  const[photo,setPhoto]=useState("")

  const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState('');
   const [error, setError] = useState('');
 
  const submit =async (e)=>{
    e.preventDefault();
    setLoading(true)
    
    

    const data=new FormData();
    data.append('product_name',name)
    data.append('product_description',description)
    data.append('product_cost',cost)
    data.append('product_photo',photo)
    try {
      const response= await axios.post("https://rexkinoo.pythonanywhere.com/api/addproduct",data)
      setLoading(false)
      setSuccess(response.data.message)

      setName("")
      setDescription("")
      setCost("")
      setPhoto('')
      
      
    } catch (error) {
      setLoading(false)
      setError("An error occured please try again ...")

      
    }

  }
  return (
    <div> 
     <div className="row justify-content-center mt-4">
     <div className="col-md-6">
     

<div className="card-shadow">
  <form onSubmit={submit}>

  <h1>Add ProductPage</h1>
  {loading && <Loader />}
  {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

  <input type="text" 
  className='form-control' 
  placeholder='Enter the Product name'
  value={name}
  required
  onChange={(e)=>setName(e.target.value)} /> <br />
  {/* {name} */}
  <input type="text"
  className='form-control'
  placeholder='Enter the product description'
  required
  value={description}
  onChange={(e)=>setDescription(e.target.value)}/> <br />
  {/* {description} */}
  <input type="number"
  className='form-control'
  placeholder='Enter the product cost' 
  value={cost}
  onChange={(e)=>setCost(e.target.value)}/> <br />
  {/* {cost} */}
<label >Product photo</label> <br />
  <input type="file"
  className='form-control' 
accept='images/*'
  onChange={(e)=>setPhoto(e.target.files[0])}/> <br /><br />
  

  <button type='submit' className='btn btn-danger'>Add Product</button>
  </form>
</div>





      </div>
     </div>
       
          
        
        </div>

        
  )
}

export default Addproduct