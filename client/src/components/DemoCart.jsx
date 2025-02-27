import React, { useState } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '671715197242-b57naf9f38l1khu143ch6rn50fpv66t8.apps.googleusercontent.com';
const SERVICE_ID = 'service_8ywcv5c';
const TEMPLATE_ID = 'template_nnda24t';
const USER_ID = 'qmfXAYWGqQ-CsVNab';

const DemoCart = ({ selectedTime, selectedDate }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [booked, setBooked] = useState(false);
  const [token, setToken] = useState(null);
  const [errors, setErrors] = useState({});

  // Use the useGoogleLogin hook with explicit clientId
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Token response:', tokenResponse);
      setToken(tokenResponse.access_token); // Store the access token
    },
    onError: (error) => console.log('Login failed:', error),
    scope: 'https://www.googleapis.com/auth/calendar.events',
    flow: 'implicit', // Use implicit flow for access_token
    clientId: GOOGLE_CLIENT_ID, // Explicitly pass clientId
  });

  const validateForm = () => {
    const newErrors = {};
    if (!firstname.trim()) newErrors.firstname = 'First name is required';
    if (!lastname.trim()) newErrors.lastname = 'Last name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert('Please log in with Google to proceed.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      const eventStart = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(':');
      eventStart.setHours(parseInt(hours), parseInt(minutes));

      const eventEnd = new Date(eventStart);
      eventEnd.setHours(eventEnd.getHours() + 1);

      const response = await axios.post(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events',
        {
          summary: `Demo with ${firstname} ${lastname}`,
          start: {
            dateTime: eventStart.toISOString(),
            timeZone: 'America/Los_Angeles',
          },
          end: {
            dateTime: eventEnd.toISOString(),
            timeZone: 'America/Los_Angeles',
          },
          attendees: [{ email }],
          conferenceData: {
            createRequest: {
              requestId: `demo-${Date.now()}`,
              conferenceSolutionKey: { type: 'hangoutsMeet' },
            },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: { conferenceDataVersion: 1 },
        }
      );

      const meetLink = response.data.hangoutLink;
      console.log(meetLink);

      if (!meetLink) {
        alert('Failed to generate Meet link. Please try again.');
        return;
      }

      const templateParams = {
        from_name: 'Your Company Name',
        to_name: `${firstname} ${lastname}`,
        to_email: email,
        selected_date: selectedDate.toDateString(),
        selected_time: selectedTime,
        meet_link: meetLink,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      console.log('✅ Email Sent Successfully');
      setBooked(true);
      setFirstname('');
      setLastname('');
      setEmail('');
      setErrors({});
    } catch (error) {
      console.error('❌ Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div className={`mt-4 ${booked ? 'hidden' : ''}`}>
        <h3 className="text-2xl font-normal text-center">Book a Demo</h3>
      </div>

      <div className={`w-full max-w-lg mx-auto p-8 shadow-md ${booked ? 'hidden' : ''}`}>
        {!token ? (
          <button
            onClick={() => login()}
            className="bg-blue-500 text-white p-2 w-full hover:bg-blue-600"
          >
            Login with Google
          </button>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className={`border p-2 w-full ${errors.firstname ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className={`border p-2 w-full ${errors.lastname ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border p-2 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full hover:bg-blue-600 disabled:bg-gray-400"
                disabled={!firstname || !lastname || !email}
              >
                Confirm
              </button>
            </div>
          </form>
        )}
      </div>

      <div className={`flex flex-col items-center justify-center w-full shadow-sm ${!booked ? 'hidden' : ''}`}>
          <img
            src="//static.hsappstatic.net/ui-images/static-2.731/optimized/success.svg"
            className="w-56 h-40"
          />
          <div className="flex flex-col items-center justify-center px-8 mt-4">
            <h1 className="text-center text-2xl font-light text-gray-600">
              Booking confirmed
            </h1>
            <p className="text-center text-sm text-gray-600 font-light">
              You're booked with CODE ONE LLC. An invitation has been
              emailed to you.
            </p>
            <h1 className="text-xl font-normal text-slate-600 mt-6">
              {selectedDate.toDateString()}
            </h1>
            <h1 className="text-xl font-normal text-slate-600 ">
              {selectedTime}
            </h1>
          </div>
        </div>

    </div>
  );
};

// Wrap DemoCart in GoogleOAuthProvider outside the component
const WrappedDemoCart = (props) => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <DemoCart {...props} />
  </GoogleOAuthProvider>
);

export default WrappedDemoCart;