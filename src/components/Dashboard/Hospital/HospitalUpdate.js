import React, { useEffect, useState } from "react";
import HUpdates from "./HUpdates";
import "./HU.css";
function HospitalUpdate() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.covidhospitalsbd.com/api/available")
      .then((res) => res.json())
      .then((values) => setData(values));
  }, []);
  console.log(data);
  console.log("Hospital");

  return (
    <div>
      Hospital Updates will be here
      <div className="container">
        <HUpdates title="General Bed" general="12100" />
        <HUpdates title="ICU Beds" general="256" />
        <HUpdates title="High Dependency Unit Beds" general="1500" />
        <HUpdates title="High Flow Nasal Canula Beds" general="412" />
      </div>
    </div>
  );
}

export default HospitalUpdate;
