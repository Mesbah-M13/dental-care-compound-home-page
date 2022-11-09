import React from "react";
import dentist from "../../../assets/dentist.webp";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main style={{ height: "500px" }} className="row d-flex align-items-center">
      <div className="col-md-5 offset-md-2">
        <h1 style={{ color: "#3A4256" }}>Appointment</h1>
        <Calendar
          onChange={handleDateChange}
          value={new Date()}
          locale="en-GB"
        />
      </div>
      <div className="col-md-5">
        <img
          src={dentist}
          alt=""
          className="img-fluid"
          style={{ height: "60vh" }}
        />
      </div>
    </main>
  );
};

export default AppointmentHeader;
