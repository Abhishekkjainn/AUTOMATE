import React, { useState } from 'react';
import Select from 'react-select';
import Slider from 'react-slider';

export default function BookingPage() {
  const [time, setTime] = useState(''); // State to manage the selected time

  const handleTimeChange = (event) => {
    setTime(event.target.value); // Update the time state when user selects a time
  };
  const [passengerCount, setPassengerCount] = useState(1); // Set default value to 1

  const decreasePassengerCount = () => {
    if (passengerCount > 1) {
      setPassengerCount(passengerCount - 1); // Decrease count only if it's above 1
    }
  };

  const increasePassengerCount = () => {
    if (passengerCount < 5) {
      setPassengerCount(passengerCount + 1); // Increase count only if it's below 5
    }
  };
  const [isDay, setIsDay] = useState(true); // Initially set to "Day"

  const toggleDayNight = () => {
    setIsDay(!isDay); // Toggle between day and night
  };

  const options = [
    { value: 'katpadi', label: 'Katpadi Junction' },
    { value: 'vit_main_gate', label: 'VIT Main Gate' },
    { value: 'vellore_fort', label: 'Vellore Fort' },
  ];

  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropLocation, setDropLocation] = useState(null);
  const [isHostelPickup, setIsHostelPickup] = useState(false);

  const customStyles = {
    input: (base) => ({
      ...base,
      textDecoration: 'none',
      fontWeight: '600',
      color: 'white',
      fontSize: '14px',
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
      fontSize: '14px',
      color: 'white',
      fontStyle: 'bold',
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: '14px',
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
            placeholder="Search Pickup"
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
            placeholder="Search Drop"
            isClearable
            isSearchable
            className="selectinput"
            styles={customStyles}
          />
        </div>
      </div>

      <div className="seconddivpass">
        <div className="passengers">
          <div className="tagpass">No Of Passengers</div>
          <div className="passengercount">{passengerCount}</div>
          <div className="buttonspassengers">
            <div
              className="decreasebuttonpass"
              onClick={decreasePassengerCount}
            >
              -
            </div>
            <div
              className="increasebuttonpass"
              onClick={increasePassengerCount}
            >
              +
            </div>
          </div>
        </div>
        <div
          className={`dayornight ${isDay ? 'day' : 'night'}`} // Apply different background based on state
          onClick={toggleDayNight}
        >
          <div className="tagdayornight">{isDay ? 'Day' : 'Night'}</div>
          <div className="descdayornight">
            {isDay ? 'From 7AM to 11PM' : 'From 11PM to 7AM'}
          </div>
          <img
            src={isDay ? '/sun.png' : '/moon.png'} // Change image source based on state
            alt={isDay ? 'Sun' : 'Moon'}
            className="imgdayornight"
          />
        </div>
      </div>

      <div className="seconddivpass">
        <div className="ridetime">
          <div className="tagridetime">Ride Time</div>
          <img src="/clock-blue.png" alt="Clock" className="ridetimeimg" />
          <input
            type="time"
            className="ridetimeinput"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
        <div className="fromhostel">
          <div className="tagridetime">Pickup From Hostel</div>
          <img src="/hostel.png" alt="Clock" className="ridetimeimg" />
          <Slider
            value={isHostelPickup ? 1 : 0}
            onChange={(value) => setIsHostelPickup(value === 1)}
            min={0}
            max={1}
            step={1}
            trackStyle={{ backgroundColor: '#ccc' }}
            thumbStyle={{ backgroundColor: '#3498db' }}
            handleStyle={{ backgroundColor: '#3498db' }}
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
