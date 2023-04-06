import React, { useState,createContext} from 'react'
export const MovieContext = createContext()
function Movieprovider(props) {
    const [movies, setmovies] = useState([{
       
    }])
  return (
      <MovieContext.Provider value={[movies, setmovies]}>
          {props.children}
          </MovieContext.Provider>
  )
}

export default Movieprovider