import React from "react";
import img from "./your-app-feature-2.jpg"



const Features = () => {
    const featuresData = [
      { id: "01", title: "Branding", description: "Official Your app to follow Tournaments, Matches, Players, Leaderboard, News etc with your own branding. Available in Android & iOS platforms." },
      { id: "02", title: "Manage Tournaments", description: "All your past, present, future tournaments under one official app." },
      { id: "03", title: "Scoring Engine", description: "Your scorers will have the ability to Live score all the matches from Your App." },
      { id: "04", title: "Wagon Wheel", description: "Your scorers will be able to record Wagon Wheel of every batsman." },
      { id: "05", title: "Leaderboard", description: "Tournament-wise leaderboard for batsmen and bowlers with multiple filter criteria." },
      { id: "06", title: "Push Notifications", description: "Automatic notifications to users on predefined important events." },
      { id: "07", title: "News*", description: "You will be able to post different news and updates related to your past or upcoming matches, tournaments." },
      { id: "08", title: "Polls & Quizzes*", description: "You will have ability to run Polls & Quizzes in Your App." },
    ];
  


    return (
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center text-red-700 mb-8">Features</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Column */}
  
          <div className="w-full lg:w-1/3 space-y-8">
            {featuresData.slice(0, 4).map((feature) => (
              <div key={feature.id} className="relative">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}{" "}
                  <span className="absolute right-0 text-gray-300 text-5xl -mt-6">{feature.id}</span>
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
  

          {/* Center Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
           src={img}
              className="w-60 lg:w-72"
            />
          
          </div>
  
          {/* Right Column */}
          <div className="w-full lg:w-1/3 space-y-8">
            {featuresData.slice(4).map((feature) => (
              <div key={feature.id} className="relative">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}{" "}
                  <span className="absolute right-0 text-gray-300 text-5xl -mt-6">{feature.id}</span>
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  
  export default Features;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  