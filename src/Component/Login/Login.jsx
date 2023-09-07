import Joi from "joi";
import React, { useState } from "react";
import axios from "axios";

function Login (){
    const [joiError , setJoiError]=useState(null)
   
    const [user , setUser]=useState({

    
        email:"", 
        password:""
    
    });
    
    function getuser(e){
       
        let inputValue=e.target.value ;
    
        let newUser = {...user}

        let propertyName = e.target.id; 
        
        newUser[propertyName] = inputValue ; 
    
       
        setUser( newUser )
     
    
    }


   function submitUser(e){

    e.preventDefault();

   

   const schema = Joi.object({
      
        email : Joi.string().email({ tlds: { allow: false } }).required() , 
        password : Joi.string().pattern(/^[a-z]{6,10}$/i).required()
    });
    
    let joiResponse = schema.validate(user,{abortEarly:false})

    if (joiResponse.error == undefined){

        sendUser();

    }else {

        let errorList = joiResponse.error.details;
        setJoiError(errorList);
    }


   }
   
   async function sendUser(){

    let {data} =  await  axios.post('https://route-egypt-api.herokuapp.com/signup' , user)
     
        console.log(data);
       }
  
   
   
    return (

        <>
        <form onSubmit={submitUser}>
        <div className="w-50 m-auto py-5">

            {joiError == null? "" : joiError.map((err)=> <div className='alert alert-danger'> {err.message}</div>)}

            <h3 className="mb-4"> Login Form</h3>
           
            <label htmlFor="email">email</label>
            <input onChange={getuser} type="email" id="email" placeholder="email" className="form-control mb-4" />
            <label htmlFor="password">Password</label>
            <input onChange={getuser} type="password" id="password" placeholder="password" className="form-control mb-4"/>

            <button onSubmit={submitUser} className="btn btn-outline-info  ">Login</button>

        </div>
        </form>
        </>
    )
}
export default Login ; 