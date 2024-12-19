import React from "react";
import live from "../Asstes/livestreamingicon.png"
import crc from "../Asstes/photo-cricket-team-stadium-icc-man-world-cup-2023-match-generative-ai_742418-6219.jpg"
import Vimg from "../Asstes/Screenshot 2024-12-17 120220.png"


const LiveStreamingBanner = () => {
  return (
    <div>
       <img src={crc} className="relative h-[300px] flex justify-center items-center left-[500px] bg-blend-screen  " />
    <div className=" w-full h-[300px] border border-blue-500 bg-[#4A2EB0] text-2xl absolute top-0 opacity-90 "> 
        <div className=" w-full h-full flex justify-center items-center flex-col text-white gap-3">
          
            <h1 className="text-white text-6xl flex justify-center items-center gap-[20px] ">CRICLOG 
              <span className=" w-[200px]  h-min-100vh py-1 border border-black bg-black rounded flex justify-center gap-4  " >
                 <img src={live} className="w-[40px] h-[25px] flex justify-center items-center relative top-[20px] " /> Live</span> STREAMING </h1>
                 <p className="">Broadcast your matches to the world by streaming them live!</p>
                 <p className="border border-white w-[200px] h-[50px] flex justify-center items-center rounded cursor-pointer hover:bg-white hover:text-black ">VIEW PRICING</p>
        </div>

      <div className="w-full min-h-100vh flex flex-col gap-[40px] mt-5">  {/* //Mid Video img Dash */}

      <h1 className="flex flex-col justify-center items-center text-3xl  text-[#4A2EB0] font-bold">What do you get in a CricLogs live stream?</h1>
       
       <div className=" w-full flex flex-row gap-[50px] px-[50px]">  {/* Video Dashborad -1 */}
         <img src={Vimg} />
         <div className="w-full min-h-100vh flex flex-col justify-center items-center gap-[20px]">
          <h1 className="" >Sports Score Tickers </h1> 
         <p  className="">Advance Score Tickers to get a feel of an international match.</p>
         </div>
       </div>
       <div className="w-full flex flex-row gap-[50px] px-[50px] ">  {/* Video Dashborad -2 */}
         
          <div className="w-full min-h-100vh flex flex-col justify-center items-center gap-[20px]">
          <h1 className=" " >Promote Sponsors </h1> 
          <p  className="">Promote Sponsors on your live streams.</p>
          </div>
         <img src={Vimg} />
       </div>

       <div className="w-full flex flex-row gap-[50px] px-[50px]">  {/* Video Dashborad -3 */}
         <img src={Vimg} />
         <div className="w-full min-h-100vh flex flex-col justify-center items-center gap-[20px]">
         <h1 className=" " > Social Media Platforms </h1> 
         <p  className="">Advance Score Tickers to get a feel of an international match.</p>
         </div>
       </div>
      </div>
             <h1 className="relative top-[100px] flex justify-center text-2xl text-gray-500 font-bold">*To ensure your live stream shines and qualifies for match highlights, upgrade to CricLogs Pro. Enjoy premium </h1>
    </div>
    </div>
  );
};

export default LiveStreamingBanner;
  