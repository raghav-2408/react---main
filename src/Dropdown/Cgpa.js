import React from "react";

export default function Cgpa() {
  let semesterVal = 1;
  function add() {
    let addy = document.getElementById("semesterContainer");
    //JS
    if (semesterVal > 8) {
      return;
    }
    let mainy = document.createElement("input");
    mainy.type = "text";
    mainy.placeholder = `Semester ${semesterVal}`;
    addy.appendChild(mainy);
    semesterVal++;
  }
  return (
    <>
      <div>
        <>
          <div
            className="container my-4 text-center"
            style={{ border: "0px solid white", width: "225px" }}
          >
            <div id="semesterContainer" style={{ width: "100px" }}></div>
          </div>
          <div className="bttnn">
            <button className="btn btn-success mx-4" onClick={add}>
              Add Semester +
            </button>
            <button className="btn btn-success mx-4">Calculate CGPA</button>
          </div>
        </>
      </div>
    </>
  );
}
