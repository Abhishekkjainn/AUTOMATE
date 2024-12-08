import React, { useState } from 'react';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header">
        <div className="company">
          <img
            src="/automate-black.png"
            alt="Automate Logo"
            className="logoimg"
          />
          <div className="name">Automate</div>
        </div>
        <div className="menubutton">
          <img
            src="/menu.png"
            alt="Menu Icon"
            className="menuimg"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <div className={`menubar ${menuOpen ? 'menubar-open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>
      </div>
    </>
  );
}

//Routes
// Home - Booking - Contact Us - About Us - Founders - FAQ'S
