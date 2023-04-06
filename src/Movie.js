import React, { useContext, useEffect, useState } from 'react'
import './Movie.css';
import movsu from './Images/video-camera.png'
import db, { auth } from './firebase'
import { MovieContext } from './Moviecontext'
import { useNavigate } from 'react-router-dom'
function Movie({uid,user}) {
 const history = useNavigate()
  const [title, settitle] = useState('')
  const [url, seturl] = useState('')
  const [movies, setmovies] = useContext(MovieContext)
  const [append, setappend] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        history("/");
      }
    });
  }, []);
  const add = (e) => {
    e.preventDefault();
    db.collection("movies").add({
      name: title,
      image: url,
      marked: false,
      uid: uid,
    })
    setappend(true);
    const push = () => {
       settitle('')
      seturl('')
      history('/movieslist')
    }
    setTimeout(push,1000)
    

  }
  return (
    <div className='Movie'>
      <div className='cardf'>
        {append ? (<div className='popale'>
          <img src={movsu} alt='icon' />
          <p> Movie Added successfully </p>
          <p>to wishlist</p>
          <h6>you are redirected to wishlist</h6>
           <div className="lds-ripple"><div></div><div></div></div>
        </div>) : ''}
<form onSubmit={add}>
            <h5>Name</h5>
          <input type='text' value={title } onChange={(e)=>settitle(e.target.value)} required></input>
        <h5>Url</h5>      
        <input type='url'value={url} onChange={(e)=>seturl(e.target.value)} required></input>
              <button >Add</button>
          </form>
      </div>
      
    </div>
  )
}

export default Movie
