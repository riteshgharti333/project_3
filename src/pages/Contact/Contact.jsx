import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Contact.scss";
import { IoIosArrowDown } from "react-icons/io";
import { selectOptions } from "../../assets/data";
import ContactSection from "../../components/ContactSection/ContactSection";

import toast from "react-hot-toast";
import { baseUrl } from "../../main";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Empty means nothing is selected
  const [isValid, setIsValid] = useState(true); // Validation state
  const selectRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#map") {
      document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventDetail: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpenSelect = () => {
    setOpenSelect((prev) => !prev);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsValid(true); // Reset validation when an option is chosen
    setOpenSelect(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpenSelect(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedOption) {
      setIsValid(false); // Show validation error if no option is selected
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");
      setSuccessMessage("");

      const response = await axios.post(`${baseUrl}/contact2/new-contact2`, {
        ...formData,
        howDidYouHearAboutUs: selectedOption,
      });

      toast.success(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        eventDetail: "",
      });
      setSelectedOption("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label>
              First Name <span className="required">(Required)</span>
            </label>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label>
              Last Name <span className="required">(Required)</span>
            </label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>
              Email <span className="required">(Required)</span>
            </label>
          </div>

          <div className="form-group">
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <label>
              Phone Number <span className="required">(Required)</span>
            </label>
          </div>

          <div className="form-group">
            <p className="event-title event">
              Event Details
              <span className="required">(Required)</span>
            </p>
          </div>

          <div className="form-group event-options">
            <p className="event-title">
              Date <span className="required">(Required)</span>
            </p>
            <input
              type="date"
              name="phoneNumber"
              // value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <p className="event-title">
              Time <span className="required">(Required)</span>
            </p>
            <input
              type="time"
              name=""
              // value={formData.}phoneNumber
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name=""
              // value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <label>
              Vanue Address <span className="required">(Required)</span>
            </label>
          </div>

          <div className="form-group">
            <input
              type="number"
              name=""
              // value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <label>
              Number of Guests <span className="required">(Required)</span>
            </label>
          </div>

          <div className="form-group">
            <input
              type="text"
              name=""
              // value={formData.phoneNumber}1
              onChange={handleChange}
              required
            />
            <label>
              Additional Requirements{" "}
              <span className="required">(Required)</span>
            </label>
          </div>

          <div className="form-group select-option" ref={selectRef}>
            <p>
              How Did You Hear About Us?{" "}
              <span className="required">(Required)</span>
            </p>
            <div className="select-options">
              <span
                className={`select-dropdown-title ${
                  !isValid ? "error-border" : ""
                }`}
                onClick={handleOpenSelect}
              >
                {selectedOption || "Select an option"}{" "}
                <IoIosArrowDown className="select-options-icon" />
              </span>
              {openSelect && (
                <div className="select-dropdown">
                  {selectOptions.map((item, index) => (
                    <span
                      key={index}
                      onClick={() => handleSelectOption(item.option)}
                    >
                      {item.option}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {!isValid && <p className="error-text">This field is required</p>}
          </div>

          {/* {/* {successMessage && <p className="success-message">{successMessage}</p>} */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className="contact2-section">
        <ContactSection />
      </div>

<div className="contact-maps" id="map">
<div className="contact-map">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2482.050124371573!2d-0.3746104233785356!3d51.53064047181858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMxJzUwLjMiTiAwwrAyMicxOS4zIlc!5e0!3m2!1sen!2sin!4v1740658248032!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      <div className="contact-map">
        <iframe
       src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3731.805801551631!2d70.98298267524812!3d20.71810908085459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQzJzA1LjIiTiA3MMKwNTknMDguMCJF!5e0!3m2!1sen!2sin!4v1740658269472!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
</div>
     
    </div>
  );
};

export default Contact;
