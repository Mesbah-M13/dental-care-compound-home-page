import React from "react";
import {
  faCalendar,
  faFileAlt,
  faGripHorizontal,
  faQuoteLeft,
  faSignOutAlt,
  faUser,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Sidebar.css';

const Sidebar = () => {
  return (
    // <div
    //   className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
    // //   style={{ minHeight: "70vh" }}
    // >
    //   <h1>Sidebar</h1>
    //   <li>
    //     <Link to="/" style={{ color: "#15D1C8" }}>
    //       <span className="text-black navName"> Online Doctor's Portal </span>
    //     </Link>
    //   </li>
    //   <li>
    //     <Link to="/dashboard/appointment" className="text-black">
    //       <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
    //     </Link>
    //   </li>
    //   <li>
    //     <Link to="/appointment" className="text-black">
    //       <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
    //     </Link>
    //   </li>
    //   <div>
    //     <Link to="/" className="text-black">
    //       <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
    //     </Link>
    //   </div>
    // </div>
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ minHeight: "400px" }}
    >
      <ul className="list-unstyled"></ul>
      <li>
							<Link to="/dashboard/appointment" className="text-white">
								<FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
							</Link>
						</li>
						<li>
							<Link to="/dashboard/appointment" className="text-white">
								<FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
							</Link>
						</li>
						<li>
							<Link to="/" className="text-white">
								<FontAwesomeIcon icon={faUsers} /> <span>Home Page</span>
							</Link>
						</li>
						<li>
							<Link to="/dashboard/prescriptions" className="text-white">
								<FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
							</Link>
						</li>
						{/* <li>
							<Link to="/dashboard/doctors" className="text-white">
								<FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
							</Link>
						</li> */}
    </div>
  );
};

export default Sidebar;
