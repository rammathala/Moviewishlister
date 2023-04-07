import React, {  useState } from 'react'
import './Movie.css';
import movsu from './Images/video-camera.png'
import db from './firebase'
import { useNavigate } from 'react-router-dom'
function Movie({uid}) {
 const Navi = useNavigate()
  const [title, settitle] = useState('')
  const [url, seturl] = useState('')
  const [append, setappend] = useState(false);
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
      Navi('/movieslist')
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
          <input placeholder='Movie Name..' type='text' value={title } onChange={(e)=>settitle(e.target.value)} required></input>
        <h5>Image address</h5>      
        <input placeholder='Paste the Image address..' type='url'value={url} onChange={(e)=>seturl(e.target.value)} required></input>
              <button >Add</button>
          </form>
      </div>
      
    </div>
  )
}

export default Movie
