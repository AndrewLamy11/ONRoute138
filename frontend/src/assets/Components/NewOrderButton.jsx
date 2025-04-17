import "../../App.css";
import { Link } from "react-router-dom"; // Use Link for navigation

export default function NewOrderButton() {
  return (
    <Link to="/NewOrderForm">
      <button className="new-order-button">New Order</button>
    </Link>
  );
}
