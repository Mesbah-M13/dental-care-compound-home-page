import React from "react";

const Doctor = ({ doctor }) => {
  return (
    <div>
      <img
        style={{ height: "220px", width: "250px" }}
        src={doctor.img}
        alt=""
      />
      <div>
        <h3 className="mt-3  mx-4">{doctor.name}</h3>
        <p className="mt-3  mx-4">{doctor.contact}</p>
        <p className="mt-3 mx-4 ">{doctor.from}</p>
      </div>
    </div>
  );
};

export default Doctor;
