import React from "react";
import doctor from "../../../assets/doctor.png";
// import will from "../../../images/will.jpg";
// import sparrow from "../../../images/sparrow.jpg";
import Doctor from "../DoctorsInfo/Doctor";

const doctorData = [
  {
    img: doctor,
    name: "Dr Sparrow",
    contact: "+0545654",
    from: 'California'
  },
  {
    img: doctor,
    name: "Will Smith",
    contact: "+05120654",
    from: 'California'
  },
  {
    img: doctor,
    name: "Jack Sparrow",
    contact: "+0540050",
    from: 'California'
  },
];

const Doctors = () => {
  return (
    <section className="doctor my-5 py-5">
      <div className="container">
        <h5 className="text-primary text-uppercase">Our Doctors</h5>
        <div className="d-flex justify-content-sm-between mt-5">

          {doctorData.map((doctor) => (
            <Doctor doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
