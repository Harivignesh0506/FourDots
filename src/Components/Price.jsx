import React from 'react'
// import { FaBeer } from 'react-icons/fa';
// import { MdPhoneAndroid } from "react-icons/md";
import phone from '../Asstes/goodphone (1).png'
import wifi from '../Asstes/4gwifi.png'
import powerbank from '../Asstes/powerbank.png'
import tripod from '../Asstes/tripod.png'

const Main = () => {
  return (
    <div className='relative top-[1300px] w-full h-[500px] border border-black bg-black text-white'>
      <h1 className='text-2xl flex justify-center font-bold p-1 relative top-3' > Subscription Priced ?</h1>
      <Price />

      <h2 className='relative top-[100px] text-2xl flex justify-center '>*Stream unlimited matches in Daily, Monthly, Yearly Plans</h2>
      <p className="border border-white w-[250px] h-[50px] flex justify-center items-center rounded cursor-pointer bg-sky-700 border-none hover:bg-white hover:text-black relative left-[650px] top-[150px] ">PURCHASE LIVE STREAM</p>
    </div>
  );
};

const Cards = ({ data }) => {
  const { title, price } = data ?? {}; // Object destructuring
  return (
    <div className='border bg-slate-400 w-[220px] h-[150px] rounded flex flex-col justify-center items-center relative top-[70px] border-none'>
      <h1>{title}</h1>
      <h1>{price}</h1>
    </div>
  );
};

const Price = () => {
  const card = {
    title: "Per Mach",
    price: "₹ 269",
  };
  const card1 = {
    title: "One Day plan",
    price: "₹ 1299",
  };
  const card2 = {
    title: "Monthly Plan",
    price: "₹ 4499",
  };
  const card3 = {
    title: "Monthly Premium ",
    price: "₹ 6000",
  };
  const card4 = {
    title: "Yearly Plan",
    price: "₹ 11999",
  };
  const card5 = {
    title: "Per Mach",
    price: "₹ 14999",
  };

  return (
    <div className="flex gap-3 justify-center text-2xl font-bold items-center ">
      <Cards data={card} />
      <Cards data={card1} />
      <Cards data={card2} />
      <Cards data={card3}  />
      <Cards data={card4} />
      <Cards data={card5} />
    </div>
  );
};

export const Icons = () =>{

  return(
    <div className='flex justify-center mt-[1350px] flex-col px-[50px]' > 
      <h1 className=' flex justify-center text-2xl font-bold text-[#4A2EB0]  '>What do you need ?</h1>
      <div className='flex flex-row gap-5 justify-evenly'>
     
      <div className='border bg-slate-300 w-[300px] h-[150px] flex justify-center mt-[50px]  rounded flex-col items-center font-bold '>
        <h2 className='text-2xl mt-[20px] '>Quality Phone Camera</h2>
       <img src={phone} className='w-[80px] flex justify-center items-center mt-[20px] ' />
      </div>

      <div className='border bg-slate-300 w-[300px] h-[150px] flex justify-center mt-[50px] p-2 rounded flex-col items-center font-bold'>
        <h2 className='text-2xl mt-[20px] '>Quality Phone Camera</h2>
       <img src={wifi} className='w-[80px] flex justify-center items-center mt-[20px] ' />
      </div>

      <div className='border bg-slate-300 w-[300px] h-[150px] flex justify-center mt-[50px] p-2 rounded flex-col items-center font-bold'>
        <h2 className='text-2xl mt-[20px] '>Quality Phone Camera</h2>
       <img src={powerbank} className='w-[80px] flex justify-center items-center mt-[20px] ' />
      </div>

      <div className='border bg-slate-300 w-[300px] h-[150px] flex justify-center mt-[50px] p-2 rounded flex-col items-center font-bold'>
        <h2 className='text-2xl mt-[20px] '>Quality Phone Camera</h2>
       <img src={tripod} className='w-[80px] flex justify-center items-center mt-[20px] ' />
      </div>

      </div>


       
    </div>
  )
}



export default Main;
