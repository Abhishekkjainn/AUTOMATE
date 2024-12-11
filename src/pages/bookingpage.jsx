import React, { useState } from 'react';
import Select from 'react-select';

export default function BookingPage() {
  const options = [
    { value: 'katpadi', label: 'Katpadi Junction' },
    { value: 'vit_main_gate', label: 'VIT Main Gate' },
    { value: 'vellore_fort', label: 'Vellore Fort' },
  ];

  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropLocation, setDropLocation] = useState(null);

  const customStyles = {
    input: (base) => ({
      ...base,
      textDecoration: 'none',
      fontWeight: '600',
      color: 'white',
      fontSize: '12px',
      padding: '12px',
    }),
    control: (base) => ({
      ...base,
      color: 'white',
      backgroundColor: '#006EFF',
      border: '1px solid transparent',
      borderRadius: '8px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'transparent',
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: 'white',
      fontStyle: 'bold',
    }),
    singleValue: (base) => ({
      ...base,
      color: 'white',
      fontWeight: 'bold',
    }),
  };

  return (
    <div className="bookingpage">
      <div className="bookinghead">Book A Ride</div>

      <div className="locationdiv">
        <div className="pickuplocation">
          <img src="/pin.png" alt="location icon" className="firsticon" />
          <Select
            options={options}
            value={pickupLocation}
            onChange={(selected) => setPickupLocation(selected)}
            placeholder="Search Pickup location..."
            isClearable
            isSearchable
            className="selectinput"
            styles={customStyles}
          />
        </div>

        <div className="seperator"></div>

        <div className="droplocation">
          <img src="/pin.png" alt="location icon" className="firsticon" />
          <Select
            options={options}
            value={dropLocation}
            onChange={(selected) => setDropLocation(selected)}
            placeholder="Search Drop location..."
            isClearable
            isSearchable
            className="selectinput"
            styles={customStyles}
          />
        </div>
      </div>

      <div className="bookingsummary">
        <div className="firstsummary">
          <div className="from">
            <div className="circle"></div>
            From: {pickupLocation ? pickupLocation.label : 'Not Selected'}
          </div>
          <div className="to">
            <div className="circle"></div>
            To: {dropLocation ? dropLocation.label : 'Not Selected'}
          </div>
        </div>
        <div className="secondsummary"></div>
      </div>
    </div>
  );
}
