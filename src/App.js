import Header from './Header';
import './App.css';
import Home from './Home';
import Movie from './Movie';
import List from './List';
import Movieprovider from './Moviecontext';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import db, { auth, provider } from './firebase';
import {  useState } from 'react';
import Loading from './Loading';
function App() {
  const [load,setload] = useState(true);
    function loa(){
        setload(false)
    }
    setTimeout(loa,6000);
  const [user, setuser] = useState();
  const [uid, setuid] = useState('');

  const handleAuth = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setuser(result.user);
          setuid(result.user.uid);
          
          
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  const logoout = () => {
    auth.signOut().then(
      setuser(null),
    )
  }
  return (<>{load ? <Loading/>:<><Movieprovider>
      <BrowserRouter>
    <div className="App">
          <Header pop={handleAuth} user={user} logoout={logoout } />
          <Routes>
            <Route path="/" element={<Home pop={handleAuth}  user={user}  />}/>
            <Route path={user && '/add'} element={<Movie uid={uid } />} />
            <Route path={user && "/movieslist"} element={<List user={user} uid={uid } />}  />
          </Routes>
      
        </div>
        </BrowserRouter>
      </Movieprovider></>}
     
 </>
  );
}

export default App;
