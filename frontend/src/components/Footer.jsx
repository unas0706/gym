import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-details">
        <h2 className="footer-header">BODY FIT GYM</h2>
        <p className="footer-p">
          Opposite Jewellers, Mallamma Center, <br />
          Narasaraopet , <br />
          9502264332
        </p>
      </div>
      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.6878321355857!2d80.05238610000002!3d16.23648050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a81c87b7d7229%3A0x70dadaf86fd4f041!2sBODY%20FIT%20GYM!5e0!3m2!1sen!2sin!4v1721045903982!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
