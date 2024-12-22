import React from 'react';
import "../App.css";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen animated-bg text-black px-4">
      <div>
      <img src="/Star4.svg" alt="Star" className="star" />
        <img src="/Star5.svg" alt="Star" className="star" />
        <img src="/Star6.svg" alt="Star" className="star" />
      </div>
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl p-8 mt-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Contact Us</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-3 border border-accent rounded focus:ring-offset-primary-light focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-3 border border-accent rounded focus:ring-offset-primary-light focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="block w-full p-3 border border-accent rounded focus:ring-offset-primary-light focus:outline-none"
          ></textarea>
          <button className="bg-secondary text-white p-3 rounded w-full hover:bg-secondary/90 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
