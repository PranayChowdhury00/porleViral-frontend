import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Policies</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="hover:text-yellow-400">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-yellow-400">Refund Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-yellow-400">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> pranaychowdhury00@gamil.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +8801303572144
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} PorleViral. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
