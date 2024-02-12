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

  function res() {
    let ans = 0;
    let semCount = 0;
    let ans1 = document.getElementsByTagName("input");
    let need = document.getElementById("result");
    for (let i = 0; i < ans1.length; i++) {
      let marks = parseFloat(ans1[i].value);
      if (!isNaN(marks)) {
        semCount++;
        ans += marks;
      }
    }

    if (semCount > 0) {
      let cgpa = ans / semCount;
      need.innerText = "CGPA : " + cgpa.toFixed(2);
    } else {
      alert("Atleast one parameter is required !");
    }
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
            <button className="btn btn-success mx-4" onClick={res}>
              Calculate CGPA
            </button>
          </div>
          <div id="res">
            <p id="result">CGPA : </p>
          </div>
        </>
      </div>
    </>
  );
}
