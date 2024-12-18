import React from "react";

const FooterCTA = () => {
  return (
    <div className="bg-gray-900 text-center py-8">
      <p className="text-gray-200 text-sm italic mb-4">
        *Apps will be available on App Store and Play Store of your country.
      </p>
      <p className="text-white text-lg mb-4">
        Get your own <strong className="font-bold">Your App</strong> with your
        own branding now!
      </p>
      <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300">
        CONTACT US
      </button>
    </div>
  );
};

export default FooterCTA;
