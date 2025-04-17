// import "../../App.css";
// import { Link } from "react-router-dom";

// export default function CompanyDetailButton({ companyName }) {
//   return (
//     <Link to={`/Details/${encodeURIComponent(companyName)}`}>
//       <button className="Detail-button">View</button>
//     </Link>
//   );
// }

import "../../App.css";
import { Link } from "react-router-dom";

export default function CompanyDetailButton({ companyName, pickupLocation }) {
  return (
    <Link
      to={`/details/${encodeURIComponent(companyName)}/${encodeURIComponent(
        pickupLocation
      )}`}
    >
      <button className="Detail-button">View</button>
    </Link>
  );
}
