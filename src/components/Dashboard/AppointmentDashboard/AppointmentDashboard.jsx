import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../Context/AuthContext";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";

const Dashboard = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    fetch(
      "https://dental-care-compound-server-production.up.railway.app/appointmentsByDate",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ date }),
      }
    )
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  };

  return (
    <div>
      <section>
        <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-5">
            <Calendar
              onChange={handleDateChange}
              value={new Date()}
              locale="en-GB"
            />
          </div>
          <div className="col-md-5">
            <AppointmentsByDate
              appointments={appointments}
            ></AppointmentsByDate>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
