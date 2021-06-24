import React, { useEffect, useState } from "react";
import { projectFirestore } from "../../firebaseConfig";
import Demo2 from "./Demo2";

function Demo1() {
  const onSub = () => {
    projectFirestore.collection("cities").add({
      name: "Tokyo",
      country: "Japan",
      cg: 4.0,
    });
    console.log("Clicked");
  };

  const [user, setUser] = useState();

  console.log(user);
  return (
    <div>
      <button onClick={onSub}>Add Data</button>
      <Demo2 />
    </div>
  );
}

export default Demo1;
