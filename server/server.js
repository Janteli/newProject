const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const crypto = require("crypto"); // Import the crypto module

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load service account credentials
const SERVICE_ACCOUNT_EMAIL = "code-one@code-one-451710.iam.gserviceaccount.com";
const SERVICE_ACCOUNT_KEY = require("./code.json"); // Replace with the path to your JSON key file

// Authenticate with the service account
const auth = new google.auth.JWT({
  email: SERVICE_ACCOUNT_EMAIL,
  key: SERVICE_ACCOUNT_KEY.private_key,
  scopes: ["https://www.googleapis.com/auth/calendar.events"],
});

// Function to generate a unique ID using crypto
const generateUniqueId = () => {
  return crypto.randomBytes(16).toString("hex"); // Generates a 32-character hex string
};

// Function to convert 12-hour time (e.g., "2:15 pm") to 24-hour time (e.g., "14:15")
const convertTo24HourFormat = (time12h) => {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "pm") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
};

// Endpoint to create a Google Meet link
app.post("/create-meet-link", async (req, res) => {
  const { email, selectedDate, selectedTime } = req.body;

  console.log("Received request:", { email, selectedDate, selectedTime }); // Log the request payload

  try {
    const calendar = google.calendar({ version: "v3", auth });

    // Validate selectedDate and selectedTime
    if (!selectedDate || !selectedTime) {
      console.error("❌ Missing date or time");
      return res.status(400).json({ error: "Missing date or time" });
    }

    // Convert 12-hour time to 24-hour time
    const time24h = convertTo24HourFormat(selectedTime);
    console.log("Converted 24-hour time:", time24h);

    // Construct the start date-time string
    const startDateTimeString = `${selectedDate}T${time24h}:00Z`;
    console.log("Generated Start DateTime String:", startDateTimeString);

    // Create a Date object
    const startDateTime = new Date(startDateTimeString);

    // Check if the Date object is valid
    if (isNaN(startDateTime.getTime())) {
      console.error("❌ Invalid Date:", startDateTimeString);
      return res.status(400).json({ error: "Invalid date or time format" });
    }

    // Calculate the end date-time (1 hour later)
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    // Create the event
    const event = {
      summary: "Demo Meeting",
      description: "This is a demo meeting scheduled for the client.",
      start: {
        dateTime: startDateTime.toISOString(), // Ensure ISO string format
        timeZone: "UTC",
      },
      end: {
        dateTime: endDateTime.toISOString(), // Ensure ISO string format
        timeZone: "UTC",
      },
      conferenceData: {
        createRequest: {
          requestId: generateUniqueId(), // Use crypto to generate a unique ID
          conferenceSolutionKey: {
            type: "hangouts", // Correct value for Google Meet
          },
        },
      },
    };

    console.log("Event object:", JSON.stringify(event, null, 2)); // Log the event object

    // Insert the event into the calendar
    const response = await calendar.events.insert({
      calendarId: "primary", // Use 'primary' for the primary calendar
      resource: event,
      conferenceDataVersion: 1, // Required for generating Meet links
    });

    const meetLink = response.data.hangoutLink;
    console.log("✅ Google Meet Link:", meetLink);

    // Send the Meet link back to the frontend
    res.status(200).json({ meetLink });
  } catch (error) {
    console.error("❌ Error Creating Event:", error);
    res.status(500).json({
      error: "Failed to create Google Meet link",
      details: error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});