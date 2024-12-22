import React, { useRef } from "react";

const ScrollExample = () => {
  // Create a reference for the target section
  const sectionRef = useRef(null);

  // Function to handle scrolling
  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={handleScroll}>Go to Content</button>

      {/* Other content */}
      <div style={{ height: "100vh" }}>Some content here...</div>

      {/* Target section */}
      <div
        ref={sectionRef}
        style={{
          height: "100vh",
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>This is the target section</h1>
      </div>
    </div>
  );
};

export default ScrollExample;
