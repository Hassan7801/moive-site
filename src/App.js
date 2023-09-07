import  React  from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Main from './Component/Main/Main'
import Jome from './Component/Jome/Jome'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import Notfound from './Component/Notfound/Notfound'
import MovieDetails from "./Component/MovieDetails/MovieDetails";
import TvShows from "./Component/TvShows/TvShows";
import Movies from "./Component/Movies/Movies";
import './App.css';


const router = createBrowserRouter([
  { path : '' , element : <Main/> , children : [

    { path : '' , element : <Jome/> },
    { path : 'home' , element : <Jome/> },
    { path : 'moviedetails' , element : <MovieDetails/> },
    { path : 'login' , element : <Login/> },
    { path :'tv-shows' , element: <TvShows/> },
    { path :'movies' , element: <Movies/> },
    { path : 'register' , element : <Register/> },
    { path : '*' , element : <Notfound/> },




  ] }


])


function App (){

return(

  <>

  <RouterProvider router = {router} />
  
  </>
);
};

export default App;