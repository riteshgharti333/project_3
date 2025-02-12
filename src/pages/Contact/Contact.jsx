import ServiceContact from '../../components/ServiceContact/ServiceContact';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.951046296!2d76.76356261822156!3d28.644287349748506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1739350797861!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }} // ✅ Fixed inline style
          allowFullScreen // ✅ Fixed JSX property
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ServiceContact />
    </div>
  );
};

export default Contact;
