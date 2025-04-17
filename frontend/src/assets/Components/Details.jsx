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
    <div className="dt-container">
      <h1>{companyDetails.TruckCompany}</h1>
      <p>Pickup Location: {companyDetails.PickupLocation}</p>
      {/* Display more company details here */}
      <p>
        Fleet and Equipment Statistics:{" "}
        {companyDetails.FleetandEquipmentStatistics}
      </p>
      <p>Info: {companyDetails.Description}</p>
      {/* Add any other information from the company object */}

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
