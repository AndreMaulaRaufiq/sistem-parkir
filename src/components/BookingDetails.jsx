import React from "react";

const BookingDetails = ({ spot }) => (
  <div className="booking-details">
    <h2>Rincian Slot Parkir {spot.id}</h2>
    {spot.booking ? (
      <div>
        <p>Nama: {spot.booking.name}</p>
        <p>Nomor Kendaraan: {spot.booking.vehicleNumber}</p>
        <p>Durasi: {spot.booking.duration} jam</p>
      </div>
    ) : (
      <p>Belum ada pemesanan.</p>
    )}
  </div>
);

export default BookingDetails;
