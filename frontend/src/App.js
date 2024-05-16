import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import GeoFoodComponent from "./components/home/GeoFoodComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div>
          <Routes>
            <Route path="/geofood" exact element={<GeoFoodComponent />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
