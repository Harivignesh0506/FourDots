import React, { useState } from "react";
import img1 from '../Asstes/1732272776799_8lPHZEsHSXgV.jpg'

const HighlightTabs = () => {
  const [activeTab, setActiveTab] = useState("LOCAL");

  const highlights = [
    {
      id: 1,
      day: "Day - 6",
      date: "18-Dec,2024",
      title: "Big Cricket League 2024: Day 6 Highlights, Live Scores",
      description: "The Big Cricket League 2024 continues to thrill cricket fans...",
      location: " ",
      image: img1,
    },
    {
      id: 2,
      day: "Day - 5",
      date: "17-Dec,2024",
      title: "Big Cricket League 2024: Day 5 Highlights, Live Scores",
      description: "The Big Cricket League 2024 continued with two thrilling matches...",
      location: "Surat - Lalbhai Contractor Stadium",
      image: img1
    },
    {
      id: 3,
      day: "Day - 4",
      date: "16-Dec,2024",
      title: "Big Cricket League 2024: Day 4 Highlights, Live Scores",
      description: "The Big Cricket League 2024 kept cricket fans entertained...",
      location: "Surat - Lalbhai Contractor Stadium",
      image: img1
    },
    {
        id: 4,
        day: "Day - 4",
        date: "16-Dec,2024",
        title: "Big Cricket League 2024: Day 4 Highlights, Live Scores",
        description: "The Big Cricket League 2024 kept cricket fans entertained...",
        location: "Surat - Lalbhai Contractor Stadium",
        image: img1
      },
      {
        id: 5,
        day: "Day - 4",
        date: "16-Dec,2024",
        title: "Big Cricket League 2024: Day 4 Highlights, Live Scores",
        description: "The Big Cricket League 2024 kept cricket fans entertained...",
        location: "Surat - Lalbhai Contractor Stadium",
        image: img1
      },
      {
        id: 6,
        day: "Day - 4",
        date: "16-Dec,2024",
        title: "Big Cricket League 2024: Day 4 Highlights, Live Scores",
        description: "The Big Cricket League 2024 kept cricket fans entertained...",
        location: "Surat - Lalbhai Contractor Stadium",
        image: img1
      },
      {
        id: 7,
        day: "Day - 4",
        date: "16-Dec,2024",
        title: "Big Cricket League 2024: Day 4 Highlights, Live Scores",
        description: "The Big Cricket League 2024 kept cricket fans entertained...",
        location: "Surat - Lalbhai Contractor Stadium",
        image: img1
      },
      {
        id: 8,
        day: "Day - 4",
        date: "16-Dec,2024",
        title: "Big Cricket League 2024: Day 4 Highlights, Live Scores",
        description: "The Big Cricket League 2024 kept cricket fans entertained...",
        location: "Surat - Lalbhai Contractor Stadium",
        image: img1
      },
      {
        id: 9,
        day: "Day - 4",
        date: "16-Dec,2024",
        title: "Big Cricket League 2024: Day 4 Highlights, Live Scores",
        description: "The Big Cricket League 2024 kept cricket fans entertained...",
        location: "Surat - Lalbhai Contractor Stadium",
        image: img1
      },
  ];

  return (
    <div className="min-h-screen bg-gray-100 mt-5">
      {/* Tabs */}
      <div className="bg-[#4A2EB0] text-white flex">
        <button
          className={`py-3 px-6 ${
            activeTab === "LOCAL"
              ? "border-b-4 border-yellow-400 font-bold"
              : "opacity-50"
          }`}
          onClick={() => setActiveTab("LOCAL")}
        >
          LOCAL
        </button>
        <button
          className={`py-3 px-6 ${
            activeTab === "INTERNATIONAL"
              ? "border-b-4 border-yellow-400 font-bold"
              : "opacity-50"
          }`}
          onClick={() => setActiveTab("INTERNATIONAL")}
        >
          INTERNATIONAL
        </button>
      </div>

      {/* Card List */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{item.date}</p>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <span className="text-sm font-medium text-blue-800">
                {item.location}
              </span>
            </div>
            
          </div>
        ))}
      </div>
      <button className="w-[100px] h-[50px] border-none bg-[#4A2EB0] rounded flex justify-center items-center font-bold text-white ml-[720px] " onClick={"/"}>Load More</button>
    </div>
  );
};



export default HighlightTabs;
