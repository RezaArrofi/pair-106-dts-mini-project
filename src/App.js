import './App.css';
import {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import NavbarAll from './components/NavbarAll';
import Home from './containers/Home';
import tmdb from './data/tmdbConnection'
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import ProtectedComponent from "./components/ProtectedComponent";


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const fetchDataMovies = async() =>{
      try{
        const response = await tmdb.get(`movie/popular?api_key=d39ba5cb0b045e08662097dab191862b`);
        console.log(response);
        setMovies(response.data.results);
      } catch (err) {
        console.log(err.response);
      }
    }
    fetchDataMovies();
  },[]);
  return (
    <>

    <div className="App">
      <NavbarAll />
      <main className="w-full  min-h-screen pt-2 pb-2 flex justify-center">
        {/* {console.log(movies.keys, movies.id)} */}
        <Routes>
          <Route
              path="/"
              element={
                <ProtectedComponent>
                  <Home key={movies.keys} moviesHome={movies} />
                </ProtectedComponent>
              }
          />
          <Route
            path="/login"
            element={<LoginPage/>}
          />
          <Route
            path="/register"
            element={<RegisterPage/>}
          />
        </Routes>
      </main>
    </div>
    </>
  );
}

export default App;
