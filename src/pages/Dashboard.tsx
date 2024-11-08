import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

export default function Dashboard() {
  const upcomingBookings = [
    { id: 1, title: 'Meeting Room A', date: '2024-03-15', time: '10:00 AM' },
    { id: 2, title: 'Conference Room', date: '2024-03-16', time: '2:00 PM' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Total Bookings</h2>
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming</h2>
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">2</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-sm text-gray-600">John Doe</p>
          <p className="text-sm text-gray-600">john@example.com</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Bookings</h2>
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{booking.title}</h3>
                  <p className="text-sm text-gray-600">{booking.date} at {booking.time}</p>
                </div>
                <button className="text-sm text-red-600 hover:text-red-700">Cancel</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}