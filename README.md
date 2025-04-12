# cdg.sh – A Clean, Simple URL Shortener

This is a lightweight URL shortener built with Node.js, Express, and MongoDB. It’s designed to be easy to use, fully CSP-compliant (no inline scripts or evals), and super quick to set up. The frontend uses plain HTML, CSS, and JavaScript — no frameworks, no fluff.

---

## ✨ What it does

- Lets users shorten long URLs with custom slugs (like `cdg.sh/my-link`)
- Redirects visitors to the original URL when they visit the short one
- Fully fronted by a minimal, framework-free UI
- Secure setup with no inline JavaScript (safe for strict CSP environments)
- Works with both local MongoDB or MongoDB Atlas

---

## ⚙️ Setup instructions

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/cdg.sh-url-shortener.git
cd cdg.sh-url-shortener
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up environment variables
Create a .env file in the root of the project:

env
Copy
Edit
MONGO_URI=mongodb+srv://your-user:your-password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
PORT=1337
You can also use a local MongoDB URI like mongodb://localhost:27017/urlshortener

🚀 Running the app
Once you're ready, just run:

bash
Copy
Edit
node server.js
And visit http://localhost:1337 in your browser. You should see a small form where you can paste a URL, add an optional slug, and get a clean short link.

📂 Project structure
vbnet
Copy
Edit
├── public/
│   ├── index.html    ← frontend form
│   ├── app.js        ← JS that handles form submission
│   ├── styles.css    ← optional styling
├── server.js         ← Express backend
├── .env              ← your MongoDB URI and PORT (ignored by Git)
💡 Why this project?
This started as a personal tool for clean, fast link sharing — especially in internal apps or projects where I didn’t want to rely on third-party URL shorteners.

It also serves as a great starting point for anyone learning:

Express routing

Form handling in vanilla JS

MongoDB operations using Monk

Secure frontend practices with CSP

🔒 Security note
This project doesn’t use any external JavaScript, inline scripts, or eval. You can lock down your CSP with:

http
Copy
Edit
Content-Security-Policy: script-src 'self';
And it will still run perfectly.
