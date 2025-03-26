import React from 'react';


import Marquee from "react-fast-marquee";
const HadLing = () => {
    return (
        <div className=' flex broder bg-slate-200 '>
           <p className='bg-red-500 w-20 p-5 text-xl font-bold'>Latest</p>
           <Marquee 	pauseOnHover={true} speed={50 } style={true}>
  
    <img  className='w-32 gap-5' src="/src/cvisack roy amr pic.jpg" alt="" /> <p className=' font-bold text-blue-500 text-3xl'>Ami ovisack roy  eta amr nwe web pag</p>
  
    <img  className='w-32' src="/src/IMG_20240829_152811.jpg" alt="" />
 

            </Marquee>
       
        </div>
    );
};

export default HadLing;