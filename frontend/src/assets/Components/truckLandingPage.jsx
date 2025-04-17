import React from "react";
import TruckNavbar from "./TruckNavbar.jsx";

const TruckLandingPage = () => {
  return (
    <div>
      <h1>Welcome Truck User!</h1>
      {/* 👇 Pass currentUser to Navbar */}
      <TruckNavbar />
      {/* <Navbar /> */}
      <p>This is your dedicated dashboard for managing loads, trucks, etc.</p>
      {/* Add truck-specific components or links here */}
    </div>
  );
};

export default TruckLandingPage;
