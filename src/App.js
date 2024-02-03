import { Route, Routes } from "react-router-dom";
import "./App.css";
import Leaderboard from "./components/Leaderboard";
// import Navbar from './components/Navbar';
import Home from "./components/Home";
import Profile from "./components/Profile";
import Cgpa from "./Dropdown/Cgpa";
import Resume from "./Dropdown/Resume";
import Attendance from "./Dropdown/Attendance";
import Roadmap from "./Dropdown/Roadmap";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [change, setChange] = useState("light");
  const [chg, alt] = useState("Dark Mode");
  const [white, chgWhite] = useState("dark");
  const [primary, chgPrimary] = useState("dark");
  const [inpCol, chgInp] = useState("white");

  const toggleMode = () => {
    const newColor = change === "light" ? "black" : "white";
    chgInp(newColor);

    if (change === "light") {
      setChange("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "white";
      // Button text :
      alt("Light Mode");

      // Leaderboard text:
      chgWhite("light");

      //Profile -- Button Text
      chgPrimary("dark");
    } else {
      setChange("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      // Button text :
      alt("Dark Mode");

      // leaderboard text:
      chgWhite("dark");

      //Profile -- Button Text
      chgPrimary("dark");
    }
  };
  return (
    <>
      <div>
        {/* <Home></Home> */}
        <Navbar
          chg={chg}
          change={change}
          toggleMode={toggleMode}
          inpCol={inpCol}
        />
        <Routes>
          <Route path="/leaderboard" element={<Leaderboard white={white} />} />
          <Route
            path="/home"
            element={<Home change={change} inpCol={inpCol} />}
          />
          <Route path="/profile" element={<Profile primary={primary} />} />
          <Route path="/Cgpa" element={<Cgpa />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
