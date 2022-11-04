import React from "react";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigationbar from "../../Shared/Navigationbar/Navigationbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookApponintment from "../BookApponintment/BookApponintment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navigationbar></Navigationbar>
      <AppointmentHeader
        handleDateChange={handleDateChange}
      ></AppointmentHeader>
      <BookApponintment date={selectedDate}></BookApponintment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
