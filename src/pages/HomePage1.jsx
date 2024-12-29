import React, { useEffect, useState } from 'react';
import './HomePage.css';
import profileImage from './ab.jpeg';
import Clock from '../components/clock'; 

const HomePage = () => {
  const [text, setText] = useState('I\'m ');
  const [subText, setSubText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ['Abhishek!', 'a Developer', 'an Analyst'];

  useEffect(() => {
    const typeText = () => {
      if (!isDeleting) {
        if (charIndex < phrases[phraseIndex].length) {
          setSubText(phrases[phraseIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Wait 1 second before starting to delete
        }
      } else {
        if (charIndex > 0) {
          setSubText(phrases[phraseIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    };

    const typingInterval = setInterval(typeText, isDeleting ? 50 : 150); // Faster typing speed for deleting

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h2>Hi,</h2>
          <h1 id="typing-text">{text}{subText}</h1>
          <p>Welcome to My Portfolio</p>
          <a href="about" className="btn-learn-more">See More About Me</a>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Abhishek" />
        </div>
      </header>
      <Clock />
    </div>
  );
};

export default HomePage;
