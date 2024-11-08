import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BookingSystem</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/book" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Book Now
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </Link>
            <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}