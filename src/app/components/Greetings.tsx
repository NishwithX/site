"use client"; // This line indicates that this component is a Client Component

import React, { useEffect, useState } from 'react';

const greetings = [
  { sentence: "Hello I'm Nishwith.", language: "English" },
  { sentence: "नमस्ते मैं निश्विथ हूँ।", language: "Hindi" },
  { sentence: "ನಮಸ್ಕಾರ ನಾನು ನಿಶ್ವಿತ್.", language: "Kannada" },
  { sentence: "വണക്കം ഞാൻ നിഷ്വിത്.", language: "Malayalam" },
  { sentence: "வணக்கம் நான் நிஷ்வித்.", language: "Tamil" },
  { sentence: "హలో నేను నిశ్విత్.", language: "Telugu" },
  { sentence: "হ্যালো আমি নিশ্বিথ.", language: "Bengali" },
  { sentence: "Hallo ich bin Nishwith.", language: "German" },
  { sentence: "こんにちは、私はニシュウィスです。", language: "Japanese" },
  { sentence: "Hola soy Nishwith.", language: "Spanish" },
  { sentence: "Привет я Нишвит.", language: "Russian" },
  { sentence: "你好 我是尼施维斯。", language: "Chinese" },
  { sentence: "Bonjour je suis Nishwith.", language: "French" },
  { sentence: "안녕하세요 저는 니시위스입니다.", language: "Korean" }
];

const Greetings: React.FC = () => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length); // Cycle through greetings
    }, 1900); // Change greeting every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    setCurrentGreeting(greetings[index]); // Update current greeting based on index
  }, [index]);

  const [firstWord, ...restWords] = currentGreeting.sentence.split(' '); // Split sentence into words
  const restSentence = restWords.join(' '); // Join the rest of the words back into a sentence

  return (
    <div className="flex items-center h-32 relative">
      <p className="text-3xl text-left max-w-xs font-mono"> {/* Use font-mono for monospace font */}
        <span className="block mb-3">
          {firstWord} 👋🐱 {/* Add the waving and cat emoji after the first word */}
        </span>
        <span className="block">{restSentence}</span> {/* Rest of the sentence */}
      </p>
    </div>
  );
};

export default Greetings;
