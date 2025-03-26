import { useState } from "react";
import {   Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";





const Hero = () => {

  const  loadedUser=useLoaderData();

  const [user,setUser]=useState(loadedUser);


  
const handleDelete=_id=>{
  console.log(_id);
  fetch(`https://server-1001.vercel.app/users/${_id}`,{
    method:"DELETE"
  })
  .then(res=>res.json())
  .then(data =>{
    console.log(data);
    if(data.deletedCount>0){
      // alert("delete successfully")
      const remaining=user.filter(user=> user._id !==_id)
      setUser(remaining)
      Swal.fire({
        title: "delete successfully",
        icon: "success",
        draggable: true
      });


    }
    else{
      alert(" try ageing ERROR ")
  }
  })
  
}
    return (

    <>
        {/* <div>
          <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there </h1>
      <p className="mb-5 w-48 ">
        <img src="/src/cvisack roy amr pic.jpg" alt="" />
             </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>  
        </div> */}
        <div className="m-28">

   <button className="btn bg-yellow-400"> <Link to={"/new"}> Create data  </Link></button>
        <h1>{user.length}</h1>
      {
        user.map( users=> <p key={users._id}>NAME:{users.name}
         Email:{users.email} <img src={users.photoUrl} alt="" />
         <Link to={`/update/${users._id}`}> <button className="btn">Update </button></Link>
         <button onClick={()=> handleDelete(users._id)} 
         className="text-red-600 bg-lime-300">.....Delete X</button>
         </p>)
      }


        </div>
     
       
       
        </>
    );
};

export default Hero;