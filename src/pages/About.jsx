import React from 'react';
import "../App.css";

const About = () => {
  return (
    <div className="min-h-screen flex items-start justify-center animated-bg pt-20 pb-4 px-4">
      <div>
      <img src="/Star4.svg" alt="Star" className="star" />
        <img src="/Star5.svg" alt="Star" className="star" />
        <img src="/Star6.svg" alt="Star" className="star" />
      </div>
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">About Book Buddy</h2>
        <p className="text-lg text-secondary">
          Book Buddy connects readers to books they'll love. Search by title, author, or keyword to explore a world of knowledge and entertainment.
        </p>
      </div>
    </div>
  );
};

export default About;
