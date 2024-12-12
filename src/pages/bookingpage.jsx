import React, { useState } from 'react';
import Select from 'react-select';

export default function BookingPage() {
  const [time, setTime] = useState(new Date().toISOString().slice(11, 16)); // Set default to current time
  const [passengerCount, setPassengerCount] = useState(1); // Set default value to 1
  const [isDay, setIsDay] = useState(true); // Initially set to "Day"
  const [isHostelPickup, setIsHostelPickup] = useState(false); // Toggle for hostel pickup
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropLocation, setDropLocation] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for API call
  const [fareData, setFareData] = useState(null); // Store fetched fare data

  const options = [
    {
      value: 'Katpadi Railway station',
      label: 'Katpadi Railway station',
    },
    {
      value: 'VITgate',
      label: 'VITgate',
    },
    {
      value: 'New Bus Stand',
      label: 'New Bus Stand',
    },
    {
      value: 'Green Circle',
      label: 'Green Circle',
    },
    {
      value: 'Vishnu Theatre',
      label: 'Vishnu Theatre',
    },
    {
      value: 'Galaxy Cinemas',
      label: 'Galaxy Cinemas',
    },
    {
      value: 'Vellore Kitchen',
      label: 'Vellore Kitchen',
    },
    {
      value: 'Karigiri Hills',
      label: 'Karigiri Hills',
    },
    {
      value: 'Golden Temple',
      label: 'Golden Temple',
    },
    {
      value: 'Chittoor Bus stand',
      label: 'Chittoor Bus stand',
    },
    {
      value: 'Vellore Fort',
      label: 'Vellore Fort',
    },
    {
      value: 'Balamathi Hills',
      label: 'Balamathi Hills',
    },
    {
      value: 'Green Tender Parks',
      label: 'Green Tender Parks',
    },
    {
      value: 'Mahadev Hills',
      label: 'Mahadev Hills',
    },
    {
      value: 'Gandhi Nagar',
      label: 'Gandhi Nagar',
    },
    {
      value: 'Rangalaya',
      label: 'Rangalaya',
    },
    {
      value: 'KFC',
      label: 'KFC',
    },
    {
      value: "Hundred's Heritage",
      label: "Hundred's Heritage",
    },
    {
      value: 'Fortune Park',
      label: 'Fortune Park',
    },
    {
      value: 'PVR Mall',
      label: 'PVR Mall',
    },
    {
      value: 'Oscar Theatre',
      label: 'Oscar Theatre',
    },
    {
      value: 'Gandhi Road',
      label: 'Gandhi Road',
    },
    {
      value: 'Jyothi Hotel',
      label: 'Jyothi Hotel',
    },
    {
      value: 'Barbeque Nation',
      label: 'Barbeque Nation',
    },
    {
      value: 'Benz Park',
      label: 'Benz Park',
    },
    {
      value: 'Khanna Fiesta',
      label: 'Khanna Fiesta',
    },
    {
      value: 'Darling Residency',
      label: 'Darling Residency',
    },
    {
      value: 'GRT Residency',
      label: 'GRT Residency',
    },
    {
      value: 'Annamalai Hotel',
      label: 'Annamalai Hotel',
    },
    {
      value: 'Srinivasa Hotel',
      label: 'Srinivasa Hotel',
    },
    {
      value: 'Pulusu',
      label: 'Pulusu',
    },
    {
      value: "Aarya's Restaurant",
      label: "Aarya's Restaurant",
    },
    {
      value: 'Namma Veedu Restaurant',
      label: 'Namma Veedu Restaurant',
    },
    {
      value: 'Pandyan Hotel',
      label: 'Pandyan Hotel',
    },
    {
      value: 'Royal Grand',
      label: 'Royal Grand',
    },
    {
      value: 'CMC Hospital',
      label: 'CMC Hospital',
    },
    {
      value: 'Naruvi Hospital',
      label: 'Naruvi Hospital',
    },
    {
      value: 'Ranipet CMC',
      label: 'Ranipet CMC',
    },
    {
      value: 'Bagayam Hospital',
      label: 'Bagayam Hospital',
    },
    {
      value: 'Vallimalai Temple',
      label: 'Vallimalai Temple',
    },
    {
      value: 'Cup and Saucer Waterfalls',
      label: 'Cup and Saucer Waterfalls',
    },
    {
      value: "Collector's Office",
      label: "Collector's Office",
    },
    {
      value: 'SMS Grand Inn',
      label: 'SMS Grand Inn',
    },
    {
      value: 'Hotel Alka',
      label: 'Hotel Alka',
    },
    {
      value: 'Mount Paradise',
      label: 'Mount Paradise',
    },
    {
      value: 'Grand Krishna Hotel',
      label: 'Grand Krishna Hotel',
    },
    {
      value: 'DMart',
      label: 'DMart',
    },
    { value: 'Vellore Zoo', label: 'Vellore Zoo' },
    { value: 'Hotel Essence', label: 'Hotel Essence' },
    { value: 'M Square', label: 'M Square' },
    { value: 'Grand Ganpat', label: 'Grand Ganpat' },
    { value: 'Arihant Inn', label: 'Arihant Inn' },
    { value: 'Millenium Residency', label: 'Millenium Residency' },
    { value: 'SGRT Residency', label: 'SGRT Residency' },
    { value: 'Kingsbury Fiesta', label: 'Kingsbury Fiesta' },
    { value: 'Prince Park', label: 'Prince Park' },
    { value: 'Vijayshree Inn', label: 'Vijayshree Inn' },
    { value: 'FAB Hotel Pranav Park', label: 'FAB Hotel Pranav Park' },
    { value: 'Surabhi International', label: 'Surabhi International' },
    { value: 'JRS Residency', label: 'JRS Residency' },
    { value: 'Pawan Park', label: 'Pawan Park' },
    { value: 'River View Hotel', label: 'River View Hotel' },
    { value: 'Palm Tree Hotel', label: 'Palm Tree Hotel' },
    { value: 'Golden Gateway', label: 'Golden Gateway' },
    { value: 'Sri Balaji International', label: 'Sri Balaji International' },
    { value: 'Yaa Residency', label: 'Yaa Residency' },
    { value: 'Senthur Inn', label: 'Senthur Inn' },
    { value: 'Golden Fort', label: 'Golden Fort' },
    { value: 'BKS Residency', label: 'BKS Residency' },
    { value: 'Sri Murugan', label: 'Sri Murugan' },
    { value: 'Grand Chariot Hotel', label: 'Grand Chariot Hotel' },
    { value: 'Green Park', label: 'Green Park' },
    { value: 'Vaibhav Residency', label: 'Vaibhav Residency' },
    { value: 'Baby Residency', label: 'Baby Residency' },
    { value: 'Babu Naidu Residency', label: 'Babu Naidu Residency' },
    { value: 'Banu Residency', label: 'Banu Residency' },
    { value: 'Chella Krishna Residency', label: 'Chella Krishna Residency' },
    { value: 'SR Residency', label: 'SR Residency' },
    { value: 'Sri Vanadurga Peedam', label: 'Sri Vanadurga Peedam' },
    {
      value: 'Kannamangalam Reserve Forest',
      label: 'Kannamangalam Reserve Forest',
    },
    { value: 'Sri Selva Vinayagar Kovil', label: 'Sri Selva Vinayagar Kovil' },
    { value: "St John's Church", label: "St John's Church" },
    {
      value: 'Assumption Cathedral Church',
      label: 'Assumption Cathedral Church',
    },
    { value: 'Earth Plate', label: 'Earth Plate' },
  ];

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

  const handleCheckFare = async () => {
    if (!pickupLocation || !dropLocation) {
      alert('Please select both pickup and drop locations.');
      return;
    }

    setLoading(true); // Start loading
    setFareData(null); // Reset fare data

    const apiURL = `https://automateapi.vercel.app/v1/fare/pickup=${
      pickupLocation.value
    }/drop=${
      dropLocation.value
    }/passengers=${passengerCount}/time=${time}/advancebooking=false/date=${
      new Date().toISOString().split('T')[0]
    }/night=${!isDay}/noofautosrequired=1/fromhostel=${isHostelPickup}`;

    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Failed to fetch fare details');
      }
      const data = await response.json();
      console.log(data);
      setFareData(data); // Store the fetched data
    } catch (error) {
      console.error(error);
      alert('Error fetching fare details. Please try again later.');
    } finally {
      setLoading(false); // Stop loading
    }
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
              onClick={() =>
                passengerCount > 1 && setPassengerCount(passengerCount - 1)
              }
            >
              -
            </div>
            <div
              className="increasebuttonpass"
              onClick={() =>
                passengerCount < 5 && setPassengerCount(passengerCount + 1)
              }
            >
              +
            </div>
          </div>
        </div>
        <div
          className={`dayornight ${isDay ? 'day' : 'night'}`} // Apply different background based on state
          onClick={() => setIsDay(!isDay)}
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
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="fromhostel">
          <div className="tagridetime">Pickup From Hostel</div>
          <img src="/hostel.png" alt="Clock" className="ridetimeimg" />
          <label className="switch">
            <input
              type="checkbox"
              checked={isHostelPickup}
              onChange={() => setIsHostelPickup(!isHostelPickup)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {(pickupLocation || dropLocation) && (
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
          <div className="secondsummary">
            <div className="checkfarebutton" onClick={handleCheckFare}>
              {loading ? <span className="loader"></span> : 'Check Fare'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// {fareData && (
//   <div className="fare-details">
//     {/* Display the fetched fare data */}
//     <div>Fare: {fareData.fare}</div>
//   </div>
// )}
