
const express = require("express"); 
const {google} = require("googleapis");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.post("/api/contact", async (req, res) =>{
  const {fullName, email, subject, message} = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    //url to the google sheets api 
    scopes: "https://www.googleapis.com/auth/spreadsheets"
  });

  try{
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      //url to the google sheets api 
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    });
  
  //client object for auth
  const client = await auth.getClient(); 
  //create instance of google sheets api 
  const googleSheets = google.sheets({version: "v4", auth: client});
  const spreadsheetId = "1nbubAs9g-BdquJcFosqIu-Ww_S8GDMoDhEBobjb133I";

  //get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    //original auth object 
    auth, spreadsheetId
  });

  //read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({ //range is the sheet
    auth, spreadsheetId, range: "testing"
  });

  //write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth, spreadsheetId, range:"testing",
    valueInputOption: "USER_ENTERED",
    resource:{
      //the values that you want to insert 
      values: [
        [[fullName, email, subject, message]]
      ]
    }

  })

  res.json({success: true, message: "Message sent successfully!"});
}catch(error){
  console.error("Error submitting contact form:", error);
  res.status(500).json({message: "Internal server error"});
}

})


app.listen(5173, () => {
  console.log(`Server running on port 5173`);
});

// app.get("/", (req, res) => {
//   res.json({ status: "Backend is running!" });
// });