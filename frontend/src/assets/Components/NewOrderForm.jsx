import "../../App.css";
import SearchTrucks from "./SearchTrucksButton";
import Navbar from "./Navbar";

export default function NewOrderForm() {
  return (
    <>
      <Navbar />
      <h3>New Order Form</h3>
      <div className="OrderForm">
        <label>Starting Location: </label>
        <select name="start" id="start">
          <option value="montreal">Montreal</option>
          <option value="cornwall">Cornwall</option>
          <option value="brockville">Brockville</option>
          <option value="kingston">Kingston</option>
          <option value="ottawa">Ottawa</option>
          <option value="toronto">Toronto</option>
        </select>
        <br />
        <label>Ending Location: </label>
        <select name="end" id="end">
          <option value="montreal">Montreal</option>
          <option value="cornwall">Cornwall</option>
          <option value="brockville">Brockville</option>
          <option value="kingston">Kingston</option>
          <option value="ottawa">Ottawa</option>
          <option value="toronto">Toronto</option>
        </select>
        <br />
        <label>Type Of Truck: </label>
        <select name="type" id="type">
          <option value="flatbed">Flatbed Truck</option>
          <option value="box">Box Truck</option>
          <option value="refridgerated">Refridgerated Truck</option>
          <option value="heavy">Heavy Truck</option>
          <option value="light">Light Truck</option>
          <option value="tank">Tank Truck</option>
        </select>
        <br />
        <label>Amount Of Trucks: </label>
        <select name="amount" id="amount">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <SearchTrucks />
    </>
  );
}
