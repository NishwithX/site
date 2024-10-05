"use client"; // Ensure this is at the top

import { useRouter } from 'next/navigation';
import SocialIcons from '../../components/SocialIcons'; // Adjust the path as necessary

export default function Contact() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      {/* Big "Contact Me" text */}
      <h1 className="text-5xl font-bold text-center mb-8">Contact Me</h1>

      {/* Social Icons */}
      <SocialIcons />

      {/* Back Button */}
      <button 
        onClick={handleBack} 
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Back
      </button>
    </div>
  );
}
