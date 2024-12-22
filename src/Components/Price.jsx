import React, { useState } from 'react'
// import { FaBeer } from 'react-icons/fa';
// import { MdPhoneAndroid } from "react-icons/md";
import phone from '../Asstes/goodphone (1).png'
import wifi from '../Asstes/4gwifi.png'
import powerbank from '../Asstes/powerbank.png'
import tripod from '../Asstes/tripod.png'


const MainCompontent = () => {
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
    <div className="flex gap-3 justify-center text-2xl font-bold items-center cursor-pointer ">
      <Cards data={card} />
      <Cards data={card1} />
      <Cards data={card2} />
      <Cards data={card3}  />
      <Cards data={card4} />
      <Cards data={card5} />
    </div>
  );
};

// Icon Component

export const Icons = () =>{

  return(
    <div className='flex justify-center mt-[1350px] flex-col px-[50px]' > 
      <h1 className=' flex justify-center text-2xl font-bold text-[#4A2EB0]  '>What do you need ?</h1>
      <div className='flex flex-row gap-5 justify-evenly'>
     
      <div className='border bg-slate-300 w-[300px] h-[180px] flex justify-center mt-[50px]  rounded flex-col items-center font-bold '>
        <h2 className='text-2xl mt-[20px] '>Quality Phone Camera</h2>
       <img src={phone} className='w-[80px] flex justify-center items-center mt-[20px] ' />
      </div>

      <div className='border bg-slate-300 w-[300px] h-[180px] flex justify-center mt-[50px] p-2 rounded flex-col items-center font-bold'>
        <h2 className='text-2xl mt-[20px] '>Quality Phone Camera</h2>
       <img src={wifi} className='w-[80px] flex justify-center items-center mt-[20px] ' />
      </div>

      <div className='border bg-slate-300 w-[300px] h-[180px] flex justify-center mt-[50px] p-2 rounded flex-col items-center font-bold'>
        <h2 className='text-2xl mt-[20px] '>Quality Phone Camera</h2>
       <img src={powerbank} className='w-[80px] flex justify-center items-center mt-[20px] ' />
      </div>

      <div className='border bg-slate-300 w-[300px] h-[180px] flex justify-center mt-[50px] p-2 rounded flex-col items-center font-bold'>
        <h2 className='text-2xl mt-[20px] '>Quality Phone Camera</h2>
       <img src={tripod} className='w-[80px] flex justify-center items-center mt-[20px] ' />
      </div>

      </div>


       
    </div>
  )
}

// Video Component

export const Video = () =>{
  
  
  return(
   
      <div className=' w-full h-[500px] border  border-blue-300 bg-white flex flex-col justify-center items-center mt-[50px] border-none '>
      <h1 className='text-2xl mt-2'> Example CricHeroes Live Streams</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pGvp5Q-1Yag?si=NRezOMRobtOz7Xvy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mt-[30px]'> </iframe>
  
      </div>
 
);

}

// FAQs page

export const FAQ = () =>{
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I purchase CricHeroes Live Streaming in advance for my match?",
      answer:
        "Yes, absolutely. In fact we recommend it. Just schedule your match and purchase CricHeroes Live Stream for that. You can do actual live streaming whenever the match starts.",
    },
    {
      question: "What do I need for quality live streaming?",
      answer: "To get the best quality, you need a stable internet connection, a good camera phone, and proper lighting conditions.",
    },
    {
      question: "Can I use more than one camera phone for CricHeroes live streaming?",
      answer: "Currently, CricHeroes supports only one camera phone for live streaming at a time.",
    },
    {
      question: "Which phones will give the best result for live streaming?",
      answer: "High-end smartphones with better cameras and processors, like iPhones and flagship Android devices, give the best results.",
    },
    {
      question: "Can we Live Stream the match on our own YouTube channel?",
      answer: "No, CricHeroes streams matches to their designated platform only.",
    },
    {
      question: "On which Youtube channel can I see my match?",
      answer: "You can watch your match on the official CricHeroes YouTube channel.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">FAQ</h1>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 mb-5  "
          >
            <button
              className="w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-700">{faq.question}</span>
              <span className="text-gray-500">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default MainCompontent ;