import { useState, useRef, useEffect } from "react";
import "./Contact.scss";
import { IoIosArrowDown } from "react-icons/io";
import { selectOptions } from "../../assets/data";

import ContactSection from "../../components/ContactSection/ContactSection";

const Contact = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Empty means nothing is selected
  const [isValid, setIsValid] = useState(true); // Validation state
  const selectRef = useRef(null);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedOption) {
      setIsValid(false); // Show validation error if no option is selected
    } else {
      console.log("Form submitted with:", selectedOption);
      // Proceed with form submission logic
    }
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" required />

            <label htmlFor="">
              First Name <span className="required">(Required)</span>
            </label>
          </div>
          <div className="form-group">
            <input type="text" required />
            <label htmlFor="">
              Last Name <span className="required">(Required)</span>
            </label>
          </div>
          <div className="form-group">
            <input type="email" required />
            <label htmlFor="">
              Email <span className="required">(Required)</span>
            </label>
          </div>
          <div className="form-group">
            <input type="number" required />

            <label htmlFor="">
              Phone Number <span className="required">(Required)</span>
            </label>
          </div>
          <div className="form-group">
            <textarea rows="5" required className="event-input" />

            <label htmlFor="" className="event-label">
              Event Details <span className="required">(Required)</span>
              <p>
                Date and Times, home and vanue address(es), number of guests,
                play any additional requirements{" "}
              </p>
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
                {/* Show selected option */}
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

          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>

      <div className="contact2-section">
        <ContactSection />
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.951046296!2d76.76356261822156!3d28.644287349748506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1739350797861!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
