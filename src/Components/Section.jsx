import React from "react";

import img from  "../Assests/your-app-feature-2.jpg"


const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">

        <img src={img} 
             className="w-full h-60 object-cover"
           />
       
    

        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">New Year T10 Tournament</h2>
          <p className="text-gray-600 text-sm">Posted on: 18-12-2023 | Bengaluru (Bangalore)</p>
          <p className="text-lg font-semibold text-red-500 mt-2">Price: ₹25,000.00</p>
          <div className="mt-4">
            <h3 className="text-md font-bold text-gray-800">Description</h3>
            <p className="text-gray-600 text-sm mt-2">
              NEW YEAR T10 CHAMPIONSHIP
              <br /> T10 TOURNAMENT - WHITE BALL
              <br /> JANUARY 4th & 5th, 2025
              <br /> ENTRY FEE: Rs. 25,000/-
              <br /> CASH PRIZE: Rs. 40,000/-
              <br /> 5 TEAMS, 1 POOL, 4 LEAGUE MATCHES
              <br /> TROPHIES: MAN OF THE MATCH, BEST BATSMAN, BEST BOWLER, MOST VALUABLE PLAYER
              <br /> LIVE STREAMING EVERY MATCH
              <br /> VENUE: BLENDIN CRICKET GROUND
              <br /> NEXT TO KUMARAPARASADAN SCHOOL, KUMMASANDRA, MUTTANALLI CROSS
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
              Contact on App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;










