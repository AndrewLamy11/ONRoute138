// import "../../App.css";

// export default function SearchTrucks() {
//   return <button className="new-order-button">Search</button>;

//   //Backend: Add Code to make it go to Results.jsx
// }

import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function SearchTrucks() {
  const navigate = useNavigate();

  const handleSearch = () => {
    const start = document.getElementById("start").value;
    const type = document.getElementById("type").value;
    const amount = document.getElementById("amount").value;

    navigate("/Results", {
      state: { start, type, amount },
    });
  };

  return (
    <button className="new-order-button" onClick={handleSearch}>
      Search
    </button>
  );
}
