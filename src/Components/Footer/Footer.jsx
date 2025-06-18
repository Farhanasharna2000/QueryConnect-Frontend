import { FaFacebookF, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className=" text-center space-y-2 px-5">
        
        {/* About */}
        <div>
          <h4 className="md:text-2xl text-xl uppercase font-black mb-3">QueryConnect</h4>
          <p className="text-sm">
            QueryConnect is a collaborative Q&A platform to ask, answer, and grow knowledge together.
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm flex items-center justify-center  gap-2">
            <FaEnvelope className="text-blue-500 " />
            support@QueryConnect.com
          </p>
        </div>

        {/* Social Links */}
        <div>
          <div className="flex gap-4 justify-center">
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
