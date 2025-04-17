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
    console.log(jwtToken);
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
      <h1>Welcome to Route 138 {currentUser}</h1>

      <Navbar />
      <div>
        <h2> Welcome to ONRoute 138 – Your Premier Trucking Network!</h2>

        <h3>
          At ONRoute 138, we revolutionize how you connect with trucking
          companies to meet your transportation needs. Whether you're looking to
          move a single shipment or manage regular loads, our platform
          simplifies the process. Search for top-rated trucking companies,
          compare competitive pricing, and effortlessly find the perfect match
          for your freight needs. But we don’t stop there—our intuitive platform
          lets you track and manage your load information with ease, giving you
          full control over your logistics journey. Our commitment is to provide
          seamless, reliable, and cost-effective transportation solutions that
          keep your business on the move. Discover ONRoute 138, where logistics
          meets innovation.
        </h3>
        <p>Join us on the road to better logistics.</p>
        <img
          src="./assets/Images/Picture1.png"
          height="50px"
          width="200px"
          alt=""
        ></img>
      </div>
      <NewOrderButton />
    </div>
  );
}
