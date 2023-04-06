import React, { useContext, useEffect} from 'react'
import './List.css'
import Cinema from './Cinema'
import { MovieContext } from './Moviecontext'
import db from './firebase';
import { Link } from 'react-router-dom';
import whi from './Images/whi.png'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
function List({uid}) {
  const [movies, setmovies] = useContext(MovieContext);
  useEffect(()=>{
  getmovies();
},[]);
function getmovies(){
  db.collection('movies').where("uid","==",uid).onSnapshot(function(querySnapshot){
    setmovies(
      querySnapshot.docs.map((doc)=>({
        id:doc.id,
        name:doc.data().name,
        image: doc.data().image,
        marked: doc.data().marked,
      }))
    );
  });
}
  return (
    
    <div className='list'>
      {movies.length === 0 ? ( <div className='emp '><div>
          <img className='whi' src={whi} alt='image' />
           <p>Your wishlist is empty!</p>
          <h5>Save your favourite movies here</h5>
        <Link className='gotoa' to={'/add'}>Go To Add </Link></div></div>) :
        (<div className='Moviecards'>
          <p className='count'><LocalMoviesIcon/> <p className='co'>{movies.length }</p></p>
        {
          movies.map((movie) => (
            <Cinema name={movie.name} image={movie.image} marked={ movie.marked} id={ movie.id} />
          ))
        }
              
          </div>
          
        )}
      
    </div>
  )
}

export default List