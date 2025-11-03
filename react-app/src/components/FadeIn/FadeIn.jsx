import React, { useState, useEffect } from 'react';
import './FadeIn.css'; // Import your CSS file

function FadeIn({ text, font, color, size}) {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    // Set a timeout to remove the blur and fade in the text after a delay
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 1450); // Adjust delay as needed (e.g., 1000ms = 1 second)

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  return (
    <p className={isBlurred ? 'text-blurred' : 'text-clear'}
    style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: size,
        color: color
    }}>
      {text}
    </p>
  );
}

export default FadeIn;