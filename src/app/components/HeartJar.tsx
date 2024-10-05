import React, { useState } from 'react';

const HeartJar: React.FC = () => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const [showHeart, setShowHeart] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupFade, setPopupFade] = useState(false);

  const incrementFill = () => {
    setFillPercentage(prev => {
      const increment = prev < 95 ? 5 : 10; // Fill faster after reaching 95%
      const newFill = Math.min(prev + increment, 100);

      if (newFill === 100) {
        setShowHeart(false); // Hide heart
        setShowPopup(true);  // Show popup

        // Set popup fade after 3 seconds
        setTimeout(() => {
          setPopupFade(true);
          setTimeout(() => setShowPopup(false), 1000); // Hide popup after fade out
        }, 3000);
      }
      return newFill;
    });
  };

  const startFilling = () => {
    incrementFill(); // Increment only once per tap or press
  };

  const stopFilling = () => {
    // Currently, no state changes are needed here
  };

  return (
    <>
      {showHeart && (
        <div 
          className="heart-container" 
          onMouseDown={startFilling}
          onMouseUp={stopFilling}
          onMouseLeave={stopFilling}
          onTouchStart={startFilling}
          onTouchEnd={stopFilling}
          style={{
            cursor: 'pointer',
            position: 'fixed',
            right: '30px',
            top: '78%',
            transform: 'translateY(-60%)',
            zIndex: 1,
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="heartClip">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </clipPath>
            </defs>
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="white"
              stroke="white"
              strokeWidth="0.8"
            />
            <rect
              width="100%"
              height="100%"
              fill="pink"
              clipPath="url(#heartClip)"
              y={`${100 - fillPercentage}%`}
            />
          </svg>
          <div style={{ userSelect: 'none' }}>
            <p style={{ textAlign: 'center', marginTop: '5px' }}>
              Tap {fillPercentage}%
            </p>
          </div>
        </div>
      )}

      {/* Popup message */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          bottom: '20px', // Position it at the bottom of the screen
          left: '50%',
          transform: `translate(-50%, ${popupFade ? '100%' : '0'})`, // Slide up effect
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'pink',
          padding: '20px',
          borderRadius: '8px',
          zIndex: 10,
          opacity: popupFade ? 0 : 1, // Control opacity for fade effect
          transition: 'transform 0.5s ease, opacity 1s ease' // Transition for slide and fade effects
        }}>
          <h2>Thank You!</h2>
        </div>
      )}
    </>
  );
};

export default HeartJar;
