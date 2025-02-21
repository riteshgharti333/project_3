import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/Homepage.jsx";
import About from "./pages/About/About.jsx";

import Service1 from "./pages/ServicesPage/Service1/Service1.jsx";
import Service2 from "./pages/ServicesPage/Service2/Service2.jsx";
import Service3 from "./pages/ServicesPage/Service3/Service3.jsx";
import Service4 from "./pages/ServicesPage/Service4/Service4.jsx";
import Service5 from "./pages/ServicesPage/Service5/Service5.jsx";
import Service6 from "./pages/ServicesPage/Service6/Service6.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Service7 from "./pages/ServicesPage/Service7/Service7.jsx";
import { useEffect } from "react";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/portfolio" element={<Gallery />} />

          <Route
            path="/wedding-photography-videography"
            element={<Service7 />}
          />
          <Route path="/pre-Wedding-shoots" element={<Service1 />} />
          <Route path="/destination-weddings" element={<Service2 />} />
          <Route path="/concerts-live-streaming" element={<Service3 />} />
          <Route path="/corporate-photoshoots" element={<Service4 />} />
          <Route
            path="/album-printing-unique-products"
            element={<Service5 />}
          />
          <Route path="/fast-delivery-photos-videos" element={<Service6 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
