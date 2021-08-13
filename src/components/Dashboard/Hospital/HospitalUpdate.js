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
        <HUpdates title="General Bed" general={data.gb} />
        <HUpdates title="ICU Beds" general={data.icu} />
        <HUpdates title="High Dependency Unit Beds" general={data.hdu} />
        <HUpdates title="High Flow Nasal Canula Beds" general={data.hfnc} />
      </div>
    </div>
  );
}

export default HospitalUpdate;
