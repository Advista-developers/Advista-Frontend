import React from 'react';
import { useAuth } from '../../API/auth.jsx';
const AccountSwitcher = ({ closeDropdown }) => {

    const {user} =useAuth();
    console.log("User",user);
  return (
    <div className="absolute top-16 right-0 w-80 bg-gray-800 text-white rounded-lg shadow-lg p-4 z-50 font-sans">
      {/* User Info */}
      <div className="flex flex-col mb-3">
        <span className="text-lg font-bold">{user.email}</span>
        <span className="text-sm text-gray-400">{user.iat}</span>
      </div>

      {/* Dropdown Header */}
      <div className="border-b border-gray-600 pb-2 mb-3">
        <h3 className="text-lg font-bold">My Madgicx</h3>
      </div>

      {/* Account List */}
      <ul className="space-y-1">
        <li className="px-3 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">Manage connected ad accounts</li>
        <li className="px-3 py-2 rounded bg-blue-600 text-white cursor-pointer transition-transform transform hover:scale-105">Your subscriptions</li>
      </ul>

      {/* Help Section */}
      <div className="mt-4">
        <h4 className="text-sm font-bold mb-2">Get help</h4>
        <ul className="space-y-1">
          <li className="px-3 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">Help Center</li>
          <li className="px-3 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">Advista Academy</li>
          <li className="px-3 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">Success Program</li>
          <li className="px-3 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">Consulting Services</li>
          <li className="px-3 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">Campaign Management Services</li>
        </ul>
      </div>

      {/* More Options */}
      <div className="mt-4">
        <h4 className="text-sm font-bold mb-2">More options</h4>
        <ul className="space-y-1">
          <li className="px-3 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">Become a Advista Partner</li>
          <li className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">
            <span>Dark Mode</span>
            <input type="checkbox" className="ml-2" />
          </li>
          <li className="px-3 py-2 rounded hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">Log Out</li>
        </ul>
      </div>

      {/* Close Button */}
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded transition-transform transform hover:bg-blue-700 hover:scale-105"
        onClick={closeDropdown}
      >
        Close
      </button>
    </div>
  );
};

export default AccountSwitcher;
