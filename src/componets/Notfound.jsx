import React from 'react'
import { Link } from 'react-router-dom'
import "./stylings/notfound.css"

const Notfound = () => {
  return (
    <div className='all'>
        <div className="notfoundcontainer">
            <div className='glitch' data-text="404">404</div>
            <div className='message'>Sorry resource not found. Click 
                <Link to={"/"}>Go home</Link>to take you back to Home.

            </div>
        </div>

       
    </div>
  )
}

export default Notfound