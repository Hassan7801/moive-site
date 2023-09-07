import  React  from "react";

function MovieDetails(){

     return (
         <>
         <div className="container">
             <div className="row">
                 <div className="col-md-3">
                     <div className="poster">
                         <img src="" className="w-100" alt="Movie Poster" />
                     </div>
                 </div>
                 <div className="col-md-9">

                    <div className="movieDetails">
                        <h4>Title </h4>
                        <p>Description</p>
                        
                        <span className="bg-info p-3">crime</span>
                        <h6>Vote</h6>
                    </div>

                 </div>
             </div>
         </div>
         
         
         
         </>
     
        )
}

export default MovieDetails;