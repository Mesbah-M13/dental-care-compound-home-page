import React from "react";
import ModalAppointmentForm from "../ModalAppointmentForm/ModalAppointmentForm";

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{booking.subject}</h5>
          <h6>{booking.visitingHour}</h6>
          <p>{booking.totalSpace}SPACES AVAILABLE</p>
          <button onClick={openModal} className="btn btn-brand text-uppercasse">
            Book Appointment
          </button>
          <ModalAppointmentForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            appointmentOn={booking.subject}
            date={date}
          ></ModalAppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
