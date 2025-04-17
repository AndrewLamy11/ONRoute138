import "../../App.css";
import SearchTrucks from "./SearchTrucksButton";
import Navbar from "./Navbar";

export default function NewOrderForm() {
  return (
    <>
      <Navbar />
      <h3>New Order Form</h3>
      <div className="OrderForm">
        <label>Location: </label>
        <select name="start" id="start">
          <option value="Markham">Markham</option>
          <option value="Guelph">Guelph</option>
          <option value="Vaughan">Vaughan</option>
          <option value="kingston">Kingston</option>
          <option value="Barrie">Barrie</option>
          <option value="Whitby">Whitby</option>
        </select>
        <br />

        <label>Type Of Truck: </label>
        <select name="type" id="type">
          <option value="RoadTractors">Road Tractors</option>
          <option value="Non-poweredUnits">Non Powered Units</option>
          <option value="StraightTrucks">Straight Trucks</option>
          <option value="FlatDecks">Flat Decks</option>
          <option value="TotalPoweredUnits">Total Powered Units</option>
          <option value="tanks">Tank Truck</option>
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
