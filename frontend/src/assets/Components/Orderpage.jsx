import Navbar from "./Navbar";
import "../../App.css";

export default function OrderPage() {
  return (
    // Backend Person: Add Code to make return button Work
    <>
      <Navbar />
      <h4>Hello Order Page</h4>
      <div className="OrderHeader">
        <h2> Order #(OrderNumber) </h2>
      </div>
      <div className="order-box">
        <div className="order-box-header">
          <h1>Details</h1>
        </div>
        <div className="order-item">
          <span className="item-label">Truck Type:</span>
          <span className="item-value">Flatbed</span>
        </div>
        <div className="order-item">
          <span className="item-label">Amount Of Trucks:</span>
          <span className="item-value">2 Trucks</span>
        </div>
        <br></br>
        <div className="order-item">
          <span className="item-label">Starting Location:</span>
          <span className="item-value">Cornwall, ON</span>
        </div>
        <div className="order-item">
          <span className="item-label">Ending Location:</span>
          <span className="item-value">Ottawa, ON</span>
        </div>
      </div>
    </>
  );
}
