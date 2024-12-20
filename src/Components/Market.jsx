import React, { useState } from "react";
import jersey from "../Asstes/photo-cricket-team-stadium-icc-man-world-cup-2023-match-generative-ai_742418-6219.jpg";
import { FaCalendarCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

// Market Cards
const Market = () => {
  const [location, setLocation] = useState("All location");
  const [selectedService, setSelectedService] = useState([]);

  const Card = [
    {
      id: 1,
      title: "Cricket Team Jersey",
      Date: "18-Dec,2024 ,11:16:05 AM",
      location: "Bangalore - Lalbhai Contractor Stadium",
      Image: jersey,
    },
    {
      id: 2,
      title: "Cricket Team Jersey",
      Date: "18-Dec,2024 ,11:16:05 AM",
      location: "Chennai - Chepauk Stadium",
      Image: jersey,
    },
    {
      id: 3,
      title: "Cricket Team Jersey",
      Date: "18-Dec,2024 ,11:16:05 AM",
      location: "Madurai - Gandhi Stadium",
      Image: jersey,
    },
    {
      id: 4,
      title: "Cricket Team Jersey",
      Date: "18-Dec,2024 ,11:16:05 AM",
      location: "Madurai - Gandhi Stadium",
      Image: jersey,
    },
    {
      id: 5,
      title: "Cricket Team Jersey",
      Date: "18-Dec,2024 ,11:16:05 AM",
      location: "Madurai - Gandhi Stadium",
      Image: jersey,
    },
    {
      id: 6 ,
      title: "Cricket Team Jersey",
      Date: "18-Dec,2024 ,11:16:05 AM",
      location: "Madurai - Gandhi Stadium",
      Image: jersey,
    },
  ];

  const handleServiceSelection = (service) => {
    setSelectedService((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold text-gray-500 flex justify-center ml-[500px]">
        Find Services & Products for Your Cricket Tournament (All Locations)
      </h1>
      {/* Card */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] w-full h-auto cursor-pointer items-center mx-auto mr-[50px] rounded">
        {Card.map((item) => (
          <div key={item.id} className="bg-white rounded shadow-md overflow-hidden">
            <div className="p-4">
              <h1 className="flex flex-col justify-center items-center font-bold">
                {item.title}
              </h1>
              <img
                src={item.Image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <p className="flex items-center p-2 text-sm">
                <FaCalendarCheck />
                {item.Date}
              </p>
              <p className="flex items-center p-2 text-sm">
                <IoLocationSharp />
                {item.location}
              </p>
            </div>
          </div >
        ))}
      </div >
      < CricketService
        location={location}
        setLocation={setLocation}
        selectedService={selectedService}
        handleServiceSelection={handleServiceSelection}
      
      />
    </div>
  );
};

// Checkbox Component
export const CricketService = ({
  location,
  setLocation,
  selectedService,
  handleServiceSelection,
}) => {
  const Services = [
    "Ground Owner",
    "Cricket Professional",
    "Umpire",
    "Cricket Tournaments",
    "Commentator",
    "Scorer",
    "Cricket Academy",
    "Sports Shop",
    "Live Streaming Provider",
    "Others",
  ];

  return (
    <div className="p-6 text-2xl relative bottom-[1000px]">
      <h1 className="text-lg font-bold mb-4">Location</h1>

      {/* Dropdown for location */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All location">All location</option>
        <option value="Chennai">Chennai</option>
        <option value="Madurai">Madurai</option>
      </select>

      <h1 className="text-lg font-bold mb-4">Cricket Services</h1>

      {/* Checkbox List */}
      <div className="space-y-2">
        {Services.map((service) => (
          <div key={service} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={service}
              value={service}
              onChange={() => handleServiceSelection(service)}
              checked={selectedService.includes(service)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={service} className="text-gray-700">
              {service}
            </label>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Market;
