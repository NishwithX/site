"use client"; // Ensure this is at the top

import { useRouter } from 'next/navigation';

export default function blog() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Hello, World!</h2>

      <button 
        onClick={handleBack} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Back
      </button>
    </div>
  );
}
