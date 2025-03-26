import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const NewRout = () => {


const handleAddUser=e=>{
    e.preventDefault()


    // const name=e.target.name.value;
    // const email=e.target.email.value;
    // const ago=e.target.ago.value;
    // const photoUrl=e.target.photoUrl.value;

    // const user={name,email,ago,photoUrl}
    // console.log(user);


    const form=e.target;

    const name=form.name.value;
    const email=form.email.value;
 
    const ago=form.ago.value;
    const photoUrl=form.photoUrl.value;
    const addData={name,email,ago,photoUrl}
    console.log(addData);


    fetch('https://server-1001.vercel.app/users',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addData)
    })
    .then(res=> res.json())
    .then(data=>{
     console.log(data)  
if(data.insertedId){

    
    // alert("user is successfully ")
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 300,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer)
         {
            
        Swal.fire({
            title: "success add user data",
            
            icon: "success",
            draggable: true,
            
          });
      }
    
    });
    // Form.reset() eta kaj kotece na

    form.reset()
}


    } )

}

 

    return (
        <div className=" flex justify-center " >
        <form onSubmit={handleAddUser}>

        <input type="text" 
 
        name="name"
        placeholder="name"
         className="input input-primary w-96" /> <br />
        <input type="email"
         placeholder="email"
         name="email"
          className="input input-secondary w-96" /> <br />
        <input type="number" 
        name="ago"
        placeholder="ago"
         className="input input-accent w-96" /> <br />
  <input type="text" className="input input-primary w-96" name="photoUrl" placeholder="photoUrl" id="" /> <br />
  <div className=" mt-10">
    <button className="btn bg-red-400 w-40 "> ok</button> 
 <button className="btn bg-red-700 w-40 ml-7"> <Link to={"/"}> Details  data</Link></button>
  </div>


        </form>

        </div>
      
    );
};

export default NewRout;