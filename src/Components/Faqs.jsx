import React, { useState } from 'react'





const Faqs = () => {


const[openfaq,setOpenfaq] =useState(null);

const[openGen,setOpenGen] =useState(null);


const faqs = [
    {
        Detail:"How to Score a Cricket Match - The CricHeroes App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Score a Cricket Match - The CricHeroes App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Score a Cricket Match - The CricHeroes App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Score a Cricket Match - The CricHeroes App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Score a Cricket Match - The CricHeroes App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        Detail:"How to Score a Cricket Match - The CricHeroes App",
        Videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/XIGOkgZTHcc?si=WfBd8KM6jshyvyo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
]

const General = [
    {
        Question:"What is CricLogs?",
        answer:"CricHeroes is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"What is CricLogs?",
        answer:"CricHeroes is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"What is CricLogs?",
        answer:"CricHeroes is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"What is CricLogs?",
        answer:"CricHeroes is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"What is CricLogs?",
        answer:"CricHeroes is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"What is CricLogs?",
        answer:"CricHeroes is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    {
        Question:"What is CricLogs?",
        answer:"CricHeroes is an app for the local amateur cricketers of the world. It allows you to score your local cricket match and broadcast scores online just like an International match."
    },
    
]

const toggleFAQS = (index) =>{
    setOpenfaq(openfaq === index ? null : index)
}

const toggleGen = (content) =>{
    setOpenGen(openGen=== content ? null : content)
}

  return (
    <div className='className="bg-gray-100 min-h-screen p-8  '>


        {/* Video */}
        
        <h1 className='text-3xl font-bold text-center mb-6 text-blue-700'>Video-1</h1>
        <div className='max-w-3xl mx-auto'>
            {
                faqs.map((faq,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleFAQS(index)}
                        >

                        <span className='font-semibold text-gray-700'>{faq.Detail}</span>   
                        <span className='text-gray-500'>
                            {openfaq === index ? "▲" : "▼"}
                            </span> 

                        </button>
                        {openfaq === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center '>
                                {faq.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>



        {/* General */}

        <h1 className='text-3xl font-bold text-center mb-6 text-blue-700 mt-2'>General</h1>

        <div className='max-w-3xl mx-auto'>
            {
                General.map((Gen,content)=>(
                    <div
                    key={content}
                    className='border-b border-gray-300 mb-5'
                    >
                      <button
                      
                      className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                      onClick={()=> toggleGen(content)}
                      >
                      <span className='font-semibold text-gray-700'>
                        {Gen.Question}
                        </span>  
                      <span className='text-gray-500'>
                        {openGen === content ?"▲" : "▼" }
                      </span>
                      </button>

                      {openGen === content && (
                        <div className='p-4 bg-gray-50 text-gray-600 flex justify-center'>
                            {Gen.answer}
                        </div>
                      )}

                    </div>
                ))
            }
        </div>

        
        {/* Scoring Related */}

        <h1 className='text-3xl font-bold text-center mb-6 text-blue-700 mt-2'>Scoring Related</h1>

        <div className='max-w-3xl mx-auto'>
            {
                General.map((Gen,content)=>(
                    <div
                    key={content}
                    className='border-b border-gray-300 mb-5'
                    >
                      <button
                      
                      className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                      onClick={()=> toggleGen(content)}
                      >
                      <span className='font-semibold text-gray-700'>
                        {Gen.Question}
                        </span>  
                      <span className='text-gray-500'>
                        {openGen === content ?"▲" : "▼" }
                      </span>
                      </button>

                      {openGen === content && (
                        <div className='p-4 bg-gray-50 text-gray-600 flex justify-center'>
                            {Gen.answer}
                        </div>
                      )}

                    </div>
                ))
            }
        </div>
                                  
        {/* Tournament Related */}

        <h1 className='text-3xl font-bold text-center mb-6 text-blue-700'>Tournament Related</h1>
        <div className='max-w-3xl mx-auto'>
            {
                faqs.map((faq,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleFAQS(index)}
                        >

                        <span className='font-semibold text-gray-700'>{faq.Detail}</span>   
                        <span className='text-gray-500'>
                            {openfaq === index ? "▲" : "▼"}
                            </span> 

                        </button>
                        {openfaq === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center '>
                                {faq.Videos}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>

        <div className=' flex flex-col justify-center items-center gap-3 '>
               <h1 className='Text-2xl font-bold'>Do you have any query ?</h1>
               <p className=''>Tell us more and we'll be happy to assist you</p>
               <button className='w-[200px] h-[50px] bg-blue-700 rounded'>Contact Us</button>
        </div>

    </div>
  )
}

export default Faqs