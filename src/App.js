import React, { useState } from "react";
import BookingDetails from "./components/BookingDetails";
import BookingForm from "./components/BookingForm";
import MapView from "./components/MapView";
import "./styles/App.css";

const App = () => {
  const [parkingData, setParkingData] = useState([
    { id: 1, x: 50, y: 50, available: true, booking: null },
    { id: 2, x: 110, y: 50, available: true, booking: null },
    { id: 3, x: 170, y: 50, available: false, booking: { name: "H", vehicleNumber: "B1234CD", duration: 2 } },
    { id: 4, x: 230, y: 50, available: false, booking: { name: "D", vehicleNumber: "B5678EF", duration: 3 } },
    { id: 5, x: 290, y: 50, available: true, booking: null },
    { id: 6, x: 50, y: 120, available: true, booking: null },
    { id: 7, x: 110, y: 120, available: false, booking: { name: "J", vehicleNumber: "B91011GH", duration: 1 } },
    { id: 8, x: 170, y: 120, available: false, booking: { name: "S", vehicleNumber: "B1213IJ", duration: 4 } },
    { id: 9, x: 230, y: 120, available: true, booking: null },
    { id: 10, x: 290, y: 120, available: true, booking: null },
  ]);

  const [selectedSpot, setSelectedSpot] = useState(null);

  const handleSpotClick = (spot) => {
    setSelectedSpot(spot);
  };

  const handleBookingSubmit = (data) => {
    setParkingData((prev) => prev.map((spot) => (spot.id === data.spotId ? { ...spot, available: false, booking: { name: data.name, vehicleNumber: data.vehicleNumber, duration: data.duration } } : spot)));
    setSelectedSpot(null);
  };

  return (
    <div>
      <h1>Sistem Pengelolaan Parkiran</h1>
      <MapView parkingData={parkingData} onSpotClick={handleSpotClick} />
      {selectedSpot && selectedSpot.available && <BookingForm selectedSpot={selectedSpot} onSubmit={handleBookingSubmit} />}
      {selectedSpot && !selectedSpot.available && <BookingDetails spot={selectedSpot} />}
    </div>
  );
};

export default App;

