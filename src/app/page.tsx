"use client"; // Mark this file as a Client Component

import Home from '../app/components/Home'; // Adjust path if necessary
import Oneko from '../app/components/Oneko'; // Adjust path if necessary
import HeartJar from '../app/components/HeartJar'; // Adjust path if necessary

export default function Main() {
  return (
    <div>
      <Home />
      <HeartJar />
      <Oneko /> {/* Load the Oneko component */}
    </div>
  );
}
