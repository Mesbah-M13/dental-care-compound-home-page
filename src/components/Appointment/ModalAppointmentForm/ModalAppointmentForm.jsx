import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const ModalAppointmentForm = ({
  modalIsOpen,
  closeModal,
  appointmentOn,
  date,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date =date;
    data.created = new Date();
    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success=>{
      if(success){
        closeModal();
        alert('Apponintment created successfully')
      }
    })
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-brand text-center"> {appointmentOn}</h2>
        <p className="text-secondary text-center">
          <small>On {date.toDateString()}</small>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <input
              className="form-control p-3"
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control p-3"
              type="text"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control p-3"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group mb-3 row">
            <div className="col-4">
              <select
                className="form-control p-3"
                name="gender"
                {...register("gender", { required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("age", { required: true })}
                className="form-control p-3"
                name="age"
                placeholder="Your Age"
                type="number"
              />
              {errors.age && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("weight", { required: true })}
                className="form-control p-3"
                name="weight"
                placeholder="Weight"
                type="number"
              />
              {errors.weight && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-group mb-3 text-right d-flex justify-content-end">
            <button
              style={{ height: "3rem" }}
              type="submit"
              className="btn btn-brand w-25 text-white"
            >
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalAppointmentForm;
