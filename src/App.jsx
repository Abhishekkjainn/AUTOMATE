import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './pages/bookingpage';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Route for Page 1 and Page 2 */}
        <Route
          path="/"
          element={
            <>
              <Page1 />
              <Page2 />
            </>
          }
        />

        {/* Route for Booking Page */}
        <Route path="/book-ride" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
