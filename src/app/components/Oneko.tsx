"use client"; // This makes it a Client Component

import Script from "next/script";

export default function ClientOneko() {
  return (
    <>
      <Script
        src="https://kibty.town/files/js/oneko.js"
        strategy="lazyOnload" // Load script when the browser is idle
        onLoad={() => {
          console.log('Oneko script loaded successfully');
        }}
      />
      <div style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 10, // Higher z-index to ensure it appears in front of the heart
      }}>
     
      </div>
    </>
  );
}
