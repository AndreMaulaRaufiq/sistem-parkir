import React, { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = ({ selectedSpot, onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", vehicleNumber: "", duration: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, spotId: selectedSpot.id });

    // Tampilkan dialog dengan hanya tombol OK
    window.alert("Thank you! Your booking has been confirmed.");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Booking Tempat Parkir: Spot {selectedSpot.id}</h3>
      <input type="text" name="name" placeholder="Nama Anda" onChange={handleChange} required />
      <input type="text" name="vehicleNumber" placeholder="Nomor Kendaraan" onChange={handleChange} required />
      <input type="number" name="duration" placeholder="Durasi (jam)" onChange={handleChange} required />
      <button type="submit">Konfirmasi Pemesanan</button>
    </form>
  );
};

export default BookingForm;
