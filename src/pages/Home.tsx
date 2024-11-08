import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
          Simple Booking System
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Book appointments, manage reservations, and streamline your scheduling process.
        </p>
        <div className="mt-10">
          <Link
            to="/book"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="mt-32">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Calendar className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Easy Scheduling</h3>
            <p className="mt-2 text-gray-600">
              Book appointments with just a few clicks
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Clock className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Real-time Availability</h3>
            <p className="mt-2 text-gray-600">
              See available slots instantly
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">User Management</h3>
            <p className="mt-2 text-gray-600">
              Manage your bookings effortlessly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}