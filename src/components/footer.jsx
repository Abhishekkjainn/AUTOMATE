import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className="footer">
      <div className="companyfooter">
        <img
          src="/automate-blue.png"
          alt="Automatelogo"
          className="logofooter"
        />
        <div className="namefooter">Automate</div>
      </div>
      <div className="companyslogan">
        Your Ride, Simplified—Effortless Travel for VIT Vellore Students.
      </div>
      <div className="twobuttons">
        <Link to={'/book-ride'} className="primarybuttonfooter">
          Book a Ride
        </Link>
        <div className="secondarybuttonfooter">Contact Us</div>
      </div>
      {/* <div className="copyright">Copyright © Automate Vellore 2023</div> */}
    </div>
  );
}
