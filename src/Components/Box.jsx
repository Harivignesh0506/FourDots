import React from "react";


const plans = [
  {
    feature: "Follow Live scores",
    app: true,
    appPlus: true,
  },
  {
    feature: "Player Profile and Team Profile",
    app: true,
    appPlus: true,
  },
  {
    feature: "Tournament Leaderboard",
    app: true,
    appPlus: true,
  },
  {
    feature: "Boundary Tracker",
    app: true,
    appPlus: true,
  },
  {
    feature: "Heroes of The match, tournament",
    app: true,
    appPlus: true,
  },

{
    feature: "Teams",
    app :true,
    appPlus: true,
},
{
    feature: "points table",
   app:true,
   appPlus:true,
},

{
    feature:"Publish News of your tournment",
app:true,
appPlus:true,
},

{
    feature:"Create and publish poll/quiz",
    app:true,
    appPlus:true,
},

{
    feature:"Notification Preferences",
    app:true,
    appPlus:true,
},

{
    feature:"5 Sponsers free every tournment",
    app:true,
    appPlus:true,
},

{
    feature:" Live Streaming semi-finals and finals",
    app:true,
    appPlus:true,
},

];

const Table = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
        Choose Your Plan
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 text-left">Features</th>
              <th className="px-4 py-2 text-center">Your App ($350)</th>
              <th className="px-4 py-2 text-center">Your App+ ($499)</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b`}
              >
                <td className="px-4 py-3 text-left font-medium">
                  {plan.feature}
                </td>
                <td className="px-4 py-3 text-center">
                  {plan.app ? "✓" : ""}
                </td>
                <td className="px-4 py-3 text-center">
                  {plan.appPlus ? "✓" : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
