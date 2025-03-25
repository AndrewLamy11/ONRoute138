import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import NewOrderButton from "./NewOrderButton.jsx";
import "../../App.css";

export default function PrivatePage() {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt-authorization");
    if (jwtToken) {
      try {
        const decodedToken = jwtDecode(jwtToken);
        setCurrentUser(decodedToken.id);
      } catch (error) {
        console.error("Invalid JWT token", error);
        setCurrentUser("");
      }
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("jwt-authorization"); // Uncomment to actually remove cookie
    setCurrentUser("");
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome {currentUser}</h1>
      <h1>Main</h1>
      <button onClick={handleLogout}>Logout</button>

      <Navbar />
      <div>
        <h1>Hello World</h1>
        <div className="order-box">
          <div className="order-box-header">
            <h1>Order History</h1>
          </div>
          <p className="order">
            Order 1506: 2 Flatbeds:{" "}
            <a href="#" className="in-progress">
              IN PROGRESS
            </a>
          </p>
          <br />
          <p className="order">
            Order 1505: 3 Flatbeds:{" "}
            <a href="#" className="complete">
              COMPLETE
            </a>
          </p>
        </div>
      </div>
      <NewOrderButton />
    </div>
  );
}
