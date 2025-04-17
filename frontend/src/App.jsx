// import "./App.css";
// import CreateUserPage from "./assets/Components/CreateUserPage";
// import TruckUserPage from "./assets/Components/TruckUserPage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./assets/Components/LandingPage";
// import MainPage from "./assets/Components/MainPage";
// import NotAuthorized from "./assets/Components/NotAuthorized";
// import NotFoundPage from "./assets/Components/NotFoundPage";
// import PrivateRoute from "./assets/Components/PrivateRoute";
// import NewOrderForm from "./assets/Components/NewOrderForm";
// import OrderHistory from "./assets/Components/OrderHistory";
// import Results from "./assets/Components/Results";
// import Details from "./assets/Components/Details";
// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route element={<PrivateRoute />}>
//             <Route path="/main" element={<MainPage />} />
//           </Route>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/create-user" element={<CreateUserPage />} />
//           <Route path="/NewOrderForm" element={<NewOrderForm />} />
//           <Route path="/OrderHistory" element={<OrderHistory />} />
//           <Route path="/Results" element={<Results />} />
//           <Route path="/create-TruckUser" element={<TruckUserPage />} />
//           <Route path="/not-authorized" element={<NotAuthorized />} />
//           {/* <Route path="/Details/:companyName" element={<Details />} /> */}
//           <Route
//             path="/details/:companyName/:pickupLocation"
//             element={<Details />}
//           />

//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import "./App.css";
import CreateUserPage from "./assets/Components/CreateUserPage";
import TruckUserPage from "./assets/Components/TruckUserPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/Components/LandingPage";
import MainPage from "./assets/Components/MainPage";
import NotAuthorized from "./assets/Components/NotAuthorized";
import NotFoundPage from "./assets/Components/NotFoundPage";
import PrivateRoute from "./assets/Components/PrivateRoute";
import NewOrderForm from "./assets/Components/NewOrderForm";
import OrderHistory from "./assets/Components/OrderHistory";
import Results from "./assets/Components/Results";
import Details from "./assets/Components/Details";
import TruckLandingPage from "./assets/Components/truckLandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/truck" element={<TruckLandingPage />} />
            {/* <Route path="/user" element={<MainPage />} /> */}
            {/* <Route path="/user" element={<UserLandingPage />} /> */}
            <Route path="/main" element={<MainPage />} />
            <Route
              path="/details/:companyName/:pickupLocation"
              element={<Details />}
            />
            <Route path="/NewOrderForm" element={<NewOrderForm />} />
            <Route path="/OrderHistory" element={<OrderHistory />} />
            <Route path="/Results" element={<Results />} />
          </Route>

          <Route path="/" element={<LandingPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/create-TruckUser" element={<TruckUserPage />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
