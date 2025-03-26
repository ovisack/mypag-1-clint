

import { GoogleAuthProvider, signInWithRedirect} from "firebase/auth";



const SingUp = () => {

   const provider = new GoogleAuthProvider();

const handleFromInputSingUp=e=>{
    e.preventDefault()


    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password);
 
    signInWithRedirect(auth, provider)


    .then((result)=>{
        console.log(result.user);
    })

    .catch(error=>{
        console.log(error,"ERROR");
    })
}



    return (
        <div className=" grid  justify-center  ">
        <form onSubmit={handleFromInputSingUp}>

    <input className="input input-bordered" type="email" placeholder="email"  name="email" required />
    <br />
    <input className="input input-bordered mt-3" type="password" name="password" placeholder=" password" required  />
    <br />
    <button className="btn bg-yellow-300 w-36 mt-4">submit </button>
        </form>
        </div>
    );
};

export default SingUp;