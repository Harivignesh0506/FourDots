import React from "react";

const Dalaa = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-4">
      <div className="container mx-auto text-center">
        <nav className="mb-2 space-x-4">
          <a href="/about" className="hover:text-white">
            ABOUT
          </a>
          <a href="/jobs" className="hover:text-white">
            JOBS
          </a>
          <a href="/privacy-policy" className="hover:text-white">
            PRIVACY POLICY
          </a>
          <a href="/terms-of-service" className="hover:text-white">
            TERMS OF SERVICE
          </a>
          <a href="/paid-service-terms" className="hover:text-white">
            PAID SERVICE TERMS
          </a>
          <a href="/icc-policy" className="hover:text-white">
            ICC POLICY
          </a>
        </nav>
        <hr className="border-gray-800 mb-2" />
        <p>
          © CricHeroes Pvt Ltd. All rights reserved. CIN U72901GJ2016PTC092938
        </p>
      </div>
    </footer>
  );
};

export default Dalaa ;
