import React, { useState, useEffect } from 'react';
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
  const [token, setToken] = useState(() => localStorage.getItem('google_access_token') || null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (token) {
      localStorage.setItem('google_access_token', token);
    }
  }, [token]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setToken(tokenResponse.access_token),
    onError: (error) => console.log('Login failed:', error),
    scope: 'https://www.googleapis.com/auth/calendar.events',
    flow: 'implicit',
    clientId: GOOGLE_CLIENT_ID,
  });

  const logout = () => {
    setToken(null);
    localStorage.removeItem('google_access_token');
  };

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
    if (!token) return alert('Please log in with Google to proceed.');
    if (!validateForm()) return;

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
          start: { dateTime: eventStart.toISOString(), timeZone: 'America/Los_Angeles' },
          end: { dateTime: eventEnd.toISOString(), timeZone: 'America/Los_Angeles' },
          attendees: [{ email }],
          conferenceData: {
            createRequest: {
              requestId: `demo-${Date.now()}`,
              conferenceSolutionKey: { type: 'hangoutsMeet' },
            },
          },
        },
        {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          params: { conferenceDataVersion: 1 },
        }
      );

      const meetLink = response.data.hangoutLink;
      if (!meetLink) throw new Error('Failed to generate Meet link');

      const templateParams = {
        from_name: 'Your Company Name',
        to_name: `${firstname} ${lastname}`,
        to_email: email,
        selected_date: selectedDate.toDateString(),
        selected_time: selectedTime,
        meet_link: meetLink,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      setBooked(true);
      setFirstname('');
      setLastname('');
      setEmail('');
      setErrors({});
    } catch (error) {
      console.error('Error:', error);
      if (error.response?.status === 401) {
        alert('Your session has expired. Please log in again.');
        logout();
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className={`mt-4 sm:mt-6 ${booked ? 'hidden' : ''}`}>
        <h3 className="text-xl sm:text-2xl font-normal text-center text-gray-800">Book a Demo</h3>
      </div>

      <div className={`w-full max-w-full sm:max-w-full p-6 shadow-md bg-white rounded-lg ${booked ? 'hidden' : ''}`}>
        {!token ? (
          <button onClick={() => login()} className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Login with Google
          </button>
        ) : (
          <>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}
                className="border p-2 w-full rounded-md focus:ring-blue-500" />
              <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)}
                className="border p-2 w-full rounded-md focus:ring-blue-500" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full rounded-md focus:ring-blue-500" />
              <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                Confirm
              </button>
            </form>
            <button onClick={logout} className="mt-4 w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
              Logout
            </button>
          </>
        )}
      </div>

      {booked && (
        <div className="w-full max-w-full sm:max-w-full p-6 bg-white rounded-lg shadow-sm text-center">
          <h1 className="text-xl font-semibold text-gray-700">Booking Confirmed</h1>
          <p className="text-gray-600 mt-2">You're booked with CODE ONE LLC. An invitation has been emailed.</p>
        </div>
      )}
    </div>
  );
};

const WrappedDemoCart = (props) => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <DemoCart {...props} />
  </GoogleOAuthProvider>
);

export default WrappedDemoCart;
