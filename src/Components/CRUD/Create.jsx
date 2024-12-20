import React, { useState } from 'react'


const initialstate ={
    CreateTitle:"",
    Date:"",
    Location:""
}

const Create = () => {

const[fromdata,setFromData] =useState(initialstate);

const handlechange =(event) =>{
    const{name,value}= event.target
    setFromData((prevFormdata)=>({...prevFormdata,[name]:value}));
}

const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(fromdata);
      setFromData(initialstate);
}

  return (
    <div className='w-full flex  justify-center items-center'>

        <form 
        onSubmit={handleSubmit}
        onReset={()=>setFromData(initialstate)}
        className="flex flex-col gap-2"
        >

            <input 
            className='p-2 border border-blue-600 outline-none rounded'
            type="text" 
            placeholder='Enter Title Nmae'
            name='CreateTitle'
            value={fromdata.CreateTitle}
            onChange={handlechange}
            required
             />

            <input 
            className='p-2 border border-blue-600 outline-none rounded'
            type="number" 
            placeholder='Enter Date'
            name='Date'
            value={fromdata.Date}
            onChange={handlechange}
            required
             />

            <input 
            className='p-2 border border-blue-600 outline-none rounded'
            type="text" 
            placeholder='Enter location'
            name='Location'
            value={fromdata.Location}
            onChange={handlechange}
            required
             />


          <button type="submit" className="px-4 py-2 bg-blue-300 rounded">submit</button>
         <button type="reset" className="px-4 py-2 bg-blue-300 rounded">reset</button>
        </form>

    </div>
  )
}

export default Create