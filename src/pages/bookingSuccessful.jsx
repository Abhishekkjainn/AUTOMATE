import React from 'react';
import { useLocation } from 'react-router-dom';
export default function BookingSuccessful() {
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  console.log(bookingDetails + 'Booking Data succesfull');

  return (
    <div className="succcesfulbooking">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit
      dolorum nulla aliquid facere doloremque quaerat nihil sit, praesentium
      fuga sapiente sint natus debitis vitae aliquam molestias soluta.
      Explicabo, sint! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptates numquam voluptas tempora quod nesciunt asperiores optio
      distinctio, tempore mollitia. Est, totam nemo qui ullam voluptas vitae.
      Excepturi rem officiis perspiciatis deserunt dolorum temporibus ducimus
      fugiat id eveniet dolore nihil velit voluptatibus exercitationem sunt,
      quos a tempore culpa quae nulla nam! Sequi, eveniet! Laboriosam ducimus
      sint quibusdam minima iure debitis veniam quae ipsum placeat, sunt tempore
      maiores, amet harum libero illum magnam, atque pariatur optio. Laborum
      perferendis, error atque debitis aut blanditiis repellendus id ipsam quod
      in praesentium. Voluptas, quia! Quae recusandae, consequuntur magni quod
      unde earum eligendi esse repellat modi?
      <br />
      <br />
      <br />
      {bookingDetails.driver.name}
    </div>
  );
}
