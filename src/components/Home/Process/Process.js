import React from "react";
import ProcessCard from "./ProcessCard";
import "./Process.css";

function Process() {
  const info = [
    {
      id: 1,
      heading: "Online Registration",
      details:
        "First, you have to complete the online registration by verifying your national identity card and correct mobile number through this portal.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUscHKr6KExePk4Va5EM-5w1OPdV2WGTGp9g&usqp=CAU",
    },
    {
      id: 2,
      heading: "Confirmation",
      details:
        "After registering online, you will receive a text message on your mobile phone mentioning the date of vaccination and the name of the vaccination center.",
      img: "https://t4.ftcdn.net/jpg/00/30/84/05/360_F_30840545_Vm4TQILJYZ0zEjYo1y9XKMKz5K2mF70a.jpg",
    },
    {
      id: 3,
      heading: "Vaccination",
      details:
        "Subject to receiving a text message on the mobile phone, you have to appear in person at the vaccination center on the specified date with the vaccine card, national identity card and signed consent form to receive the Covid-19 vaccine.",
      img: "https://www.publichealth.hscni.net/sites/default/files/inline-images/LOGO%20LANDSCAPE_0.png",
    },
  ];
  return (
    <section id="process">
      <h4 className="miniTitle text-center">The Process</h4>
      <div className="text-center mb-4">
        <h3 className="sectionTitle">
          Of receiving the Covid-19 corona vaccine
        </h3>
      </div>
      <div className="container">
        {info.map(({ id, heading, details, img }) => (
          <ProcessCard
            key={id}
            id={id}
            heading={heading}
            details={details}
            img={img}
          />
        ))}
      </div>
    </section>
  );
}

export default Process;
