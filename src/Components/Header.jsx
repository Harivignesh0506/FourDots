
import React from "react";

const YourApp = () => {
  return (
    <div className="relative bg-blue-700 text-white text-center py-16">
      {/* Background Image */}


      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('your-background-image-path.jpg')" }}
      ></div>


      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your <span className="text-white font-extrabold">App</span> From CricHeroes
        </h1>
        <p className="text-lg md:text-xl">
          Make your players, your followers with Your App.
        </p>
      </div>
    </div>
  );
};



export default YourApp;
