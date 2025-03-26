
import { useLoaderData } from 'react-router-dom';


const Update = () => {
    const usersLoader=useLoaderData();
    // console.log("ami kanet paci to",usersLoader); eta diye chak kora hoye ce


    let handleUpdate=(event)=> {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;

        const ago = form.ago.value;
        const photoUrl = form.photoUrl.value;
        const usersData = { name, email, ago, photoUrl };
        console.log(usersData);

        fetch(`https://server-1001.vercel.app/users${usersLoader?._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(usersData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    alert("upDate successfully")
                   
                }
            });

    }


    return (
        <div>
        <h1>update of usersData {usersLoader.name}</h1>
        <form onSubmit={handleUpdate}>

<input type="text" 

name="name"
placeholder="name" defaultValue={usersLoader?.name}
 className="input input-primary" />
<input type="email"
 placeholder="email"
 defaultValue={usersLoader?.email}
 name="email"
  className="input input-secondary" />
<input type="number" 
name="ago"
defaultValue={usersLoader?.ago}
placeholder="ago"
 className="input input-accent" />
<input type="text"
 className="input input-primary" defaultValue={usersLoader?.photoUrl} name="photoUrl" placeholder="photoUrl" id="" />
 
<button>add ok </button>

</form>
       
        </div>
    );
};

export default Update;