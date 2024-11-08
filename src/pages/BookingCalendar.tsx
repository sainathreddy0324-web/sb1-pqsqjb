import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import 'react-day-picker/dist/style.css';

export default function BookingCalendar() {
  const [selected, setSelected] = React.useState<Date>();
  const [timeSlot, setTimeSlot] = React.useState<string>();

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  const handleBooking = () => {
    if (selected && timeSlot) {
      console.log('Booking for:', format(selected, 'PP'), 'at', timeSlot);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <CalendarIcon className="h-6 w-6 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Book an Appointment</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h2>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              disabled={{ before: new Date() }}
              className="border rounded-lg p-4"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Time</h2>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setTimeSlot(slot)}
                  className={`p-2 text-sm rounded-md ${
                    timeSlot === slot
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleBooking}
            disabled={!selected || !timeSlot}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}