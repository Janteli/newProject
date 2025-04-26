import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10 mb-10">
      <h1 className="text-3xl  mb-6 text-gray-800">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Effective Date: April 26, 2025</p>

      <p className="text-gray-700 mb-4">
        Welcome to CodeOne! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
      </p>

      <h2 className="text-2xl  mt-8 mb-4 text-gray-800">Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Personal Information (name, email address, etc.)</li>
      </ul>

      <h2 className="text-2xl  mt-8 mb-4 text-gray-800">How We Use Your Information</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Provide and maintain our services</li>
        <li>Communicate with you</li>
        <li>Improve our platform</li>
        <li>Send important updates & google meet generated</li>
      </ul>

      <h2 className="text-2xl  mt-8 mb-4 text-gray-800">Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not share your personal information with third parties except to comply with legal obligations or with your consent.
      </p>

      <h2 className="text-2xl  mt-8 mb-4 text-gray-800">Cookies</h2>
      <p className="text-gray-700 mb-4">
        We use cookies to improve your experience. You can manage cookies through your browser settings.
      </p>

      <h2 className="text-2xl  mt-8 mb-4 text-gray-800">Data Security</h2>
      <p className="text-gray-700 mb-4">
        We implement strong security measures, but no method of transmission is 100% secure.
      </p>

      <h2 className="text-2xl  mt-8 mb-4 text-gray-800">Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You have the right to access, modify, or delete your information. Contact us at{' '}
        <a href="mailto:support@codeonegroup.com" className="text-blue-500 hover:underline">
          codeonenode@gmail.com
        </a>.
      </p>

      <h2 className="text-2xl  mt-8 mb-4 text-gray-800">Changes to this Privacy Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this policy from time to time. Changes will be posted here.
      </p>

      <h2 className="text-2xl  mt-8 mb-4 text-gray-800">Contact Us</h2>
      <p className="text-gray-700">
        Questions? Email us at{' '}
        <a href="mailto:support@codeonegroup.com" className="text-blue-500 hover:underline">
          codeonenode@gmail.com
        </a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
