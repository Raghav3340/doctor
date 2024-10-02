import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [relatedDoctors, setRelatedDoctors] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // To track selected date
  const [selectedTime, setSelectedTime] = useState(null); // To track selected time

  useEffect(() => {
    if (doctors.length > 0) {
      const docInfo = doctors.find((doc) => doc._id === docId);
      if (docInfo) {
        setDocInfo(docInfo);
        // Fetch related doctors by speciality
        const related = doctors.filter(
          (doc) => doc.speciality === docInfo.speciality && doc._id !== docId
        ).slice(0, 2);
        setRelatedDoctors(related);
      }
    }
  }, [docId, doctors]);

  if (!docInfo) return <div>Loading...</div>;

  const bookingSlots = [
    { day: 'SUN', date: '29' },
    { day: 'MON', date: '30' },
    { day: 'TUE', date: '1' },
    { day: 'WED', date: '2' },
    { day: 'THU', date: '3' },
    { day: 'FRI', date: '4' },
    { day: 'SAT', date: '5' },
  ];

  const timeSlots = [
    '03:00 pm', '04:00 pm', '04:30 pm', '05:00 pm', '05:30 pm',
    '06:00 pm', '06:30 pm', '07:00 pm', '07:30 pm', '08:00 pm'
  ];

  const handleDateSelect = (index) => {
    setSelectedDate(index);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Doctor Info */}
      <Card className="mb-8">
        <CardContent className="flex p-6">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-48 h-48 rounded-lg mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {docInfo.name} <Badge>Verified</Badge>
            </h2>
            <p className="text-gray-600 mb-2">{docInfo.speciality}</p>
            <p className="text-sm text-gray-500 mb-4">{docInfo.about}</p>
            <p className="font-semibold">
              Appointment fee: ${docInfo.appointmentFee}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Booking Slots */}
      <h3 className="text-xl font-semibold mb-4">Booking slots</h3>
      <div className="flex justify-between mb-6">
        {bookingSlots.map((slot, index) => (
          <Button
            key={index}
            variant={selectedDate === index ? 'default' : 'outline'}
            className="flex-col"
            onClick={() => handleDateSelect(index)} // Handle date selection
          >
            <span className="text-xs">{slot.day}</span>
            <span className="text-lg font-bold">{slot.date}</span>
          </Button>
        ))}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {timeSlots.map((time, index) => (
          <Button
            key={index}
            variant={selectedTime === time ? 'default' : 'outline'}
            onClick={() => handleTimeSelect(time)} // Handle time selection
          >
            {time}
          </Button>
        ))}
      </div>

      <Button className="w-full mb-8">Book an appointment</Button>

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4">Related Doctors</h3>
          <p className="text-sm text-gray-500 mb-4">
            Simply browse through our extensive list of trusted doctors.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {relatedDoctors.map((doctor, index) => (
              <Card key={index}>
                <CardContent className="flex items-center p-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-lg mr-4"
                  />
                  <div>
                    <Badge className="mb-2" variant="secondary">Available</Badge>
                    <h4 className="font-semibold">{doctor.name}</h4>
                    <p className="text-sm text-gray-500">{doctor.speciality}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Appointment;
