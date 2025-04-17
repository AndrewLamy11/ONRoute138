//
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CreateOrderButton from "./CreateOrderButton"; // adjust path if needed

const Details = () => {
  const { companyName, pickupLocation } = useParams();
  const [companyDetails, setCompanyDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        // Make a request to the server using both companyName and pickupLocation
        const response = await axios.get(
          `http://localhost:3000/company/${companyName}?pickup=${pickupLocation}`
        );
        setCompanyDetails(response.data);
      } catch (err) {
        setError("Error fetching company details");
        console.error("Error fetching company details:", err);
      }
    };

    fetchCompanyDetails();
  }, [companyName, pickupLocation]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!companyDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{companyDetails.TruckCompany}</h1>
      <p>
        <h3>Info: {companyDetails.Description}</h3>
      </p>
      <p>
        <h4>Trucks Available: {companyDetails.VALUE}</h4>
      </p>
      <p>
        <h4>Pickup Location: {companyDetails.PickupLocation}</h4>
      </p>
      {/* Display more company details here */}
      <p>
        <h4>
          Fleet and Equipment Statistics:{" "}
          {companyDetails.FleetandEquipmentStatistics}
        </h4>
      </p>
      <p>
        <h4>Company Founded: {companyDetails.REF_DATE}</h4>
      </p>
      <p>
        <h4> DGUID: {companyDetails.DGUID}</h4>
      </p>

      <p>
        <h4> UOM_ID: {companyDetails.UOM_ID}</h4>
      </p>
      <p>
        <h4> Scaler_Factor: {companyDetails.SCALAR_FACTOR}</h4>
      </p>
      {companyDetails.ImagePath && (
        <img
          src={companyDetails.ImagePath}
          alt={`${companyDetails.TruckCompany} logo`}
          style={{ width: "300px", borderRadius: "10px", marginTop: "20px" }}
        />
      )}

      {/* Add any other information from the company object */}
      <br />
      <CreateOrderButton
        companyName={companyDetails.TruckCompany}
        pickupLocation={companyDetails.PickupLocation}
      />
    </div>
  );
};

export default Details;

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Details() {
//   const { companyName } = useParams();
//   const [company, setCompany] = useState(null);

//   useEffect(() => {
//     if (companyName) {
//       axios
//         .get(`http://localhost:3000/company/${companyName}`)
//         .then((res) => setCompany(res.data))
//         .catch((err) => {
//           console.error("Error fetching company details:", err);
//         });
//     }
//   }, [companyName]);

//   if (!company) return <div>Loading compafbvny info...</div>;

//   return (
//     <div>
//       <h1>{company.TruckCompany}</h1>
//       <p>Pickup Location: {company.PickupLocation}</p>
//       <p>
//         Fleet Statistics: {JSON.stringify(company.FleetandEquipmentStatistics)}
//       </p>
//       {/* Add other fields as needed */}
//     </div>
//   );
// }
