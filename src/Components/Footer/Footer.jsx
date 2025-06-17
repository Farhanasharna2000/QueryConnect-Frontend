import { FaFacebookF, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
        
        {/* About */}
        <div>
          <h4 className="text-xl font-semibold mb-3">QueryConnect</h4>
          <p className="text-sm">
            QueryConnect is a collaborative Q&A platform to ask, answer, and grow knowledge together.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact</h4>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-blue-500" />
            support@QueryConnect.com
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-blue-500 hover:text-blue-400 text-lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 hover:text-blue-300 text-lg" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-gray-400 text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} QueryConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
