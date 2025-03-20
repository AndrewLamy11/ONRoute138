import "./App.css";
import CreateUserPage from "./assets/Components/CreateUserPage";
import TruckUserPage from "./assets/Components/TruckUserPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/Components/LandingPage";
import MainPage from "./assets/Components/MainPage";
import NotAuthorized from "./assets/Components/NotAuthorized";
import NotFoundPage from "./assets/Components/NotFoundPage";
import PrivateRoute from "./assets/Components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/main" element={<MainPage />} />
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
