import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowCircleRight,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white text-sm">
      <div className="container mx-auto px-4 py-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {/* Subscribe Section */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg">Exclusive</h2>
          <p>Subscribe to get 10% off your first order.</p>
          <form className="flex items-center border bg-gray-900 rounded">
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-transparent border-none text-sm py-1 px-2 flex-1 focus:outline-none"
            />
            <button type="submit" className="p-2">
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="text-base"
              />
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg">Support</h2>
          <ul className="space-y-1">
            <li>Karachi, Pakistan</li>
            <li>Shahroxyt@gmail.com</li>
            <li>+92 300 3666930</li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg">Account</h2>
          <ul className="space-y-1">
            <li className="cursor-pointer">My Account</li>
            <li className="cursor-pointer">Login / Register</li>
            <li className="cursor-pointer">Cart</li>
            <li className="cursor-pointer">Wishlist</li>
            <li className="cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="space-y-1">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms of Use</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg">Social Links</h2>
          <div className="flex space-x-3">
            <Link href="https://www.youtube.com/" target="_blank">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-2xl transition-transform transform hover:scale-110"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-shahroz-a35b68292/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl transition-transform transform hover:scale-110"
              />
            </Link>
            <Link
              href="https://www.facebook.com/muhammad.shahroz.58"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl transition-transform transform hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-3">
        <p className="text-center text-xs">
          <FontAwesomeIcon icon={faCopyright} className="mr-1" />
          Copyright Sherry 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
