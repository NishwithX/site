// Import the HelloWorld component at the top
"use client";
import Home from '../app/components/Home';
import Oneko from '../app/components/Oneko';
import HeartJar from '../app/components/HeartJar';

export default function Main() {
  return (
    <div>

      <Home />
      <HeartJar />
      <Oneko /> {/* Load the Oneko script */}

    </div>
  );
}
