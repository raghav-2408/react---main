import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const linkColor = props.change === "dark" ? "#ffffff" : "#000000"; // Adjust colors as needed

  return (
    <div className="containerfirst bg">
      <div className={`sidebar bg-${props.change}`}>
        <div className="h1 my-4 text-center">
          <h5 className="ff text-center">
            <b>Student Portal</b>
          </h5>
        </div>

        <hr />
        <div className="first text-center">
          <div className="hov">
            <Link to="/attendance" style={{ color: linkColor }}>
              Attendance Manager
            </Link>
          </div>
          {/* <hr> */}
        </div>

        <div className="first  text-center">
          <Link to="/Cgpa" style={{ color: linkColor }}>
            CGPA Generator
          </Link>
        </div>
        <div className="first text-center">
          <Link to="/Resume" style={{ color: linkColor }}>
            Resume Templates
          </Link>
        </div>
        <div className="first text-center">
          <Link to="/Roadmap" style={{ color: linkColor }}>
            Roadmap
          </Link>
        </div>
        <div className="first text-center">
          <Link to="/" style={{ color: linkColor }}>
            Study Materials
          </Link>
        </div>
        <div className="logout my-5 text-center">
          <Link to="/" style={{ color: linkColor }}>
            Log Out &#8688;
          </Link>
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
}
