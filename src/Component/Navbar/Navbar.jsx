import React from "react";
import { Link } from "react-router-dom";


function Navbar (){
    return (

        <>
 <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">NOXE</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="tv-shows">TvShows</Link>
        </li>
        </ul>


       

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
      
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-secondary" type="submit">Search</button>
      </form>
     
        <li class="nav-item">
        <i class="fa-brands mx-2 me-3 fa-facebook"></i>
         <i class="fa-brands me-3 fa-instagram"></i>
         <i class="fa-brands me-3 fa-spotify"></i>
         <i class="fa-brands me-3 fa-twitter"></i>
        </li>


      


        <li class="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>

        </li>
       
        </ul>
        
     
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar ; 