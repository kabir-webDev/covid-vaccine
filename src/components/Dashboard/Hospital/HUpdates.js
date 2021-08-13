import React from "react";
import "./us.css";

function HUpdates({ title, general }) {
  //   return <div></div>;
  return (
    <div className="xx">
      <div className="up__Style">
        Currently Available {title} is :{" "}
        <span style={{ color: "yellow", fontSize: 22 }}> {general}</span>
      </div>
    </div>
  );
}

export default HUpdates;
