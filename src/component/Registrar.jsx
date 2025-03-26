import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import auth from "../firbase";
import { useState } from "react";
import { Link } from "react-router-dom";



const Registrar = () => {
const [error,setError]=useState()

const handleFromInput=e=>{
   e.preventDefault();



   const email=e.target.email.value;
   const password=e.target.password.value;

console.log(email);
console.log(password);
// console.log(e.target.email.value);
createUserWithEmailAndPassword(auth,email,password)
.then((result)=>{
  
  console.log(result.user);
})

.catch(error=>{

   const errors=error.message;
   setError(errors)
  console.log("ERRor",error);
})
}




    return (
        <div className="hero bg-base-200 min-h-screen">
        
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
             </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleFromInput} className="card-body">
              <div className="form-control">
                {/* <label className="label"> */}
                  <span className="label-text" >Email</span>
                {/* </label> */}
                <input  type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary "> Register</button>
                <p>{error}</p>
              </div>
            </form>
            
            <p className="p-8">Register all exist <Link to={"/Login"} className=" text-lime-600 font-bold underline text-1xl"> Login nwe</Link></p>
          </div>
        </div>
   
    );
};

export default Registrar;