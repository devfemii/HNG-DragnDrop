import React from 'react'
import { Link } from 'react-router-dom'


const Hero = ({search, filterSearch, authUser, userSignOut, toggleModal }) => {

  return (
    <div className='hero'>
        <div className="left_content">
            <h1>Femi.dev</h1>
        </div>
        <div className="right_content">
            <form action="">
                <input 
                value={search}
                onChange={filterSearch}
                placeholder='Search by tag...' />
            </form>
            {
                authUser ? <button onClick={userSignOut}>Sign Out</button> : <button><Link to='/auth'>Sign In</Link></button>
            }
        </div>
    </div>
  )
}

export default Hero