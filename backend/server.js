const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();

app.use(cors());
app.use(express.json());

// 🔐 Google auth
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// 🔗 REPLACE THIS WITH YOUR SHEET ID
const SPREADSHEET_ID = "17L9FPGphhoO9xOoQ5q_-iVXlPnsiHb92hWbJv3lXBPE";

// 📩 Subscribe endpoint
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:A",
    });

    const emails = response.data.values || [];
    const exists = emails.some(row => row[0] === email);

    if (exists) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:B",
      valueInputOption: "RAW",
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });

    res.json({ message: "Subscribed successfully!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});