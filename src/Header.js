import React from 'react'
import './Header.css'
import hand from "./Images/hand.png"
import projector1 from "./Images/png2wing.com.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'
function Header({ pop, user, logoout }) {
  const Navi = useNavigate()
  function logou() {
    logoout();
    Navi('/');
}
  return (
      <div className='Header'>
      <Link to={'/'} className='logo'>
        <h2 className='h2'>M</h2>
        <img className='pimage' src={projector1} alt='' />
        <img className='pimage' src={hand} alt=''/>
          <h5 className='text'>Lister</h5>
        
      </Link>  
      {user && <div className='links'>
        <p><NavLink to={'/Add'}>Add</NavLink></p>
        <p><NavLink to={'/movieslist'}>wishlist</NavLink></p>
       </div>}
      {!user ? (<div className='login'>
          <button onClick={pop}>Login</button>
      </div>) : (<div className='login use'>
           <img className='userphoto' src={user.photoURL} alt='user' />
          <p className='signout'><li>{user.displayName}</li><li onClick={logou} >Signout</li></p>
      </div>)}
      </div>
  )
}

export default Header