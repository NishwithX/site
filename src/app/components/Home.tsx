import Greetings from "../components/Greetings"; // Adjust the path if necessary
import Link from 'next/link'; // Import Link from Next.js for navigation
// import SocialIcons from '../components/SocialIcons'; // Uncomment if you use this component

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start h-screen overflow-hidden p-7">
      <div className="mt-[-70%] mb-1 text-left">
        <Greetings /> {/* This will display the greeting */}
        <h1 className="text-xl font-bold mb-2">Student, Programmer, Linux User</h1>
        <p className="text-base mb-4">
          I&apos;m a self-taught software developer<br />
          who&apos;s very passionate about Linux.<br />
          I like to build cool stuff but haven&apos;t built anything yet ;) <br />
          Let&apos;s connect and collaborate!
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-4 border border-black p-1 rounded">
        <Link href="/blog" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-pink-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-pink-500 group-hover:bg-pink-500"></span>
          <span className="relative text-black group-hover:text-white">Blog</span>
        </Link>

        <Link href="/contact" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-pink-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-pink-500 group-hover:bg-pink-500"></span>
          <span className="relative text-black group-hover:text-white">Contact</span>
        </Link>

        <Link href="/projects" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-pink-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-pink-500 group-hover:bg-pink-500"></span>
          <span className="relative text-black group-hover:text-white">Projects</span>
        </Link>
      </div>
    </div>
  );
}
