import React from 'react';
import { useLocation } from 'react-router-dom';
export default function BookingSuccessful() {
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  console.log(bookingDetails + 'Booking Data succesfull');

  return <div className="succcesfulbooking"></div>;
}
