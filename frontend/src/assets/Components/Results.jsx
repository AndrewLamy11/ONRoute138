import "../../App.css";
import Navbar from "./Navbar";
import CompanyDetailButton from "./CompanyDetailButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Add this at the top

export default function Results() {
  const location = useLocation();
  console.log(location.state);
  const { start, type, amount } = location.state || {}; // Destructure all passed values
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    if (!start) return;

    axios
      .post("http://localhost:3000/Results", {
        Pickuplocation: start,
      })
      .then((response) => {
        // setResults((prevData) => {
        //   return [...prevData, response.data];
        // });

        setResults([response.data]); // ✅ Wrap it directly in an array
      })
      .catch((error) => {
        console.error("Error fetching results", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [start]);

  return (
    <>
      <div className="rt-container">
        <h1>Results</h1>
        <Navbar />
        {loading ? (
          <p>Loading...</p>
        ) : results ? (
          results.map((item, index) => (
            <div className="result-ct">
              <div className="result-card" key={index}>
                {/* <h3>{item.companyName}</h3> */}
                <p>Location: {item.PickupLocation}</p>
                <p>Company Name: {item.TruckCompany}</p>
                <p>Cargo Command Center: {item.GEO}</p>
                {console.log(item)}
              </div>
              {type && item[type] !== undefined && (
                <>
                  <p>Truck Type: {type}</p>
                  <p>Available Units: {item[type]}</p>
                </>
              )}

              <CompanyDetailButton
                companyName={item.TruckCompany}
                pickupLocation={item.PickupLocation}
              />
            </div>
          ))
        ) : (
          <p>No matching results found for {start}.</p>
        )}
      </div>
    </>
  );
}
