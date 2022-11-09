import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../assets/chair.jpg";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          numquam repudiandae architecto sequi ex laudantium ipsum porro magni
          quas aliquam!
        </p>
        <button className="btn btn-primary">
          <Link className="nav-link" to="/appointment">
            {" "}
            GET APPOINMENT
          </Link>
        </button>
      </div>
      <div className="col-md-6" style={{ height: "50vh" }}>
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
