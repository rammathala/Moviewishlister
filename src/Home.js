import React from 'react'
import './Home.css'
import { Button } from '@mui/material'
function Home({ user, pop }) {
  
  return (
      <div className='Home'>
          <div className='Content'>
              <h2>{user ?'Start wishlisting your favourite movies to watch':'Login in to whichlist the movies you want to watch'}</h2>
          
     
        <Button onClick={ pop} className='button'>
           <span></span>
      <span></span>
      <span></span>
      <span></span>{user?`Welcome ${user.displayName}`:`log in`}</Button>
        </div>
      </div>
          
   
  )
}

export default Home