const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─────────────────────────────────────────
// 📩 SUBSCRIBE ROUTE (was backend A)
// ─────────────────────────────────────────
const SUBSCRIBE_SHEET_ID = "17L9FPGphhoO9xOoQ5q_-iVXlPnsiHb92hWbJv3lXBPE";

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SUBSCRIBE_SHEET_ID,
      range: "Sheet1!A:A",
    });

    const emails = response.data.values || [];
    const exists = emails.some((row) => row[0] === email);

    if (exists) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SUBSCRIBE_SHEET_ID,
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

// ─────────────────────────────────────────
// 📬 CONTACT FORM ROUTE (was backend B)
// ─────────────────────────────────────────
const CONTACT_SHEET_ID = "1nbubAs9g-BdquJcFosqIu-Ww_S8GDMoDhEBobjb133I";

app.post("/api/contact", async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId: CONTACT_SHEET_ID,
      range: "testing",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[fullName, email, subject, message]],
      },
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─────────────────────────────────────────
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});