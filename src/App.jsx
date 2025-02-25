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

import { Toaster } from "react-hot-toast";


function App() {
  // const ScrollToTop = () => {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  //   return null;
  // };

  return (
    <div className="app">
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/portfolio" element={<Gallery />} />

          
          <Route path="/wedding-photography-cinematography" element={<Service1 />} />
          <Route path="/pre-Wedding-films-photography" element={<Service2 />} />
          <Route path="/birthday-Photography-films" element={<Service3 />} />
          <Route path="/baby-shower-photography" element={<Service4 />} />
          <Route
            path="/civil-marriage-photography"
            element={<Service5 />}
          />
          <Route path="/engagement-photography-couple-portraits" element={<Service6 />} />

          <Route
            path="/graduation-photography"
            element={<Service7 />}
          />
        </Routes>
        <Footer />

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontFamily: "Sora, serif",
              fontSize: "18px",
              fontWeight: "600",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
