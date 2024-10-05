import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'; // Import icons
import Link from 'next/link';

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center space-x-7 py-4">
      {/* GitHub */}
      <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white text-2xl hover:text-gray-400 transition-colors duration-300" />
      </Link>
      {/* LinkedIn */}
      <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition-colors duration-300" />
      </Link>
      {/* Twitter */}
      <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white text-2xl hover:text-gray-400 transition-colors duration-300" />
      </Link>
      {/* Email */}
      <Link href="mailto:youremail@example.com">
        <FaEnvelope className="text-white text-2xl hover:text-gray-400 transition-colors duration-300" />
      </Link>
    </div>
  );
};

export default SocialIcons;
