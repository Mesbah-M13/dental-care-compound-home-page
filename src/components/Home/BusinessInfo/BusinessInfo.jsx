import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const infoData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "250 bed,Khulna 8000",
    icon: faLocationDot,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+880-1768552430",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
