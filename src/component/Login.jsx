import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import auth from "../firbase";
import { useState } from "react";
import { Link } from "react-router-dom";
// import NewRout from "./NewRout";


const Login = () => {

const [error,setError]=useState(true)



const handleLogin=e=>{
  e.preventDefault()
 const email=e.target.email.value;
 const password=e.target.password.value;

 console.log(email,password);
 signInWithEmailAndPassword(auth, email, password)


 .then(result=>{
  console.log(result.user);
  setError(!true)
 })
 .cath(error=>{
  console.log(error,"Error");
 })

}
  
    return (
    <>
    
      <div className="hero bg-base-200 min-h-screen">
   
      <div className="text-center lg:text-left">
        
         </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> 
            <h1 className="text-5xl font-bold p-5 text-green-500">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body">
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
            <button className="btn  bg-orange-400"> Login</button>
          </div>
          <p>{error?<p></p>:<p className="text-green-700 font-bold  text-2xl">sussexFul </p>}</p>
        </form>
        <p className="p-9">  Crate register new <Link to={"/Register"} className="text-orange-400 font-bold underline">Register  </Link></p>
      </div>
    </div>
    </>
    );
};

export default Login;

