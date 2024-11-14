import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white flex flex-col items-center py-8">
      <div className="w-11/12 flex flex-wrap justify-around mb-8">
        <div className="w-48 p-4">
          <h2 className="text-xl font-semibold mb-4">Share Square</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Culture</a></li>
            <li><a href="#" className="hover:text-gray-400">Career</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Landlord</a></li>
          </ul>
        </div>
        
        <div className="w-48 p-4">
          <h2 className="text-xl font-semibold mb-4">Information</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">Support Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Document required</a></li>
            <li><a href="#" className="hover:text-gray-400">Annual returns</a></li>
          </ul>
        </div>

        <div className="w-48 p-4">
          <h2 className="text-xl font-semibold mb-4">Policies</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Cancellation & Return</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Rental Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="w-48 p-4">
          <h3 className="text-xl font-semibold mb-4">NEED HELP?</h3>
          <h5 className="mb-4">Download app</h5>
          <img src="/assets/gp.jpg" alt="play" className="w-full mb-2" />
          <img src="/assets/ap.jpg" alt="apple" className="w-full" />
        </div>
      </div>

      <div className="w-11/12 flex justify-between items-center py-4 border-t border-gray-600">
        <div className="flex items-center space-x-1">
          <span>&copy;</span>
          <h6>indianprivate.Pvt.Ltd</h6>
        </div>
        <div className="flex space-x-4">
          <a href="https://in.linkedin.com/" className="hover:text-gray-400"><img src="src/assets/5296501_linkedin_network_linkedin_logo_icon.png" alt="LinkedIn" className="w-8" /></a>
          <a href="https://twitter.com" className="hover:text-gray-400"><img src="src/assets/5296516_tweet_twitter_twitter_logo_icon.png" alt="Twitter" className="w-8" /></a>
          <a href="https://www.youtube.com/" className="hover:text-gray-400"><img src="src/assets/317714_video_youtube_icon.png" alt="YouTube" className="w-8" /></a>
          <a href="https://www.instagram.com/" className="hover:text-gray-400"><img src="src/assets/1298747_instagram_brand_logo_social_media_icon.png" alt="Instagram" className="w-8" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
