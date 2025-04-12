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
npm install
3. Set up environment variables
Create a .env file in the root of the project:
MONGO_URI=mongodb+srv://your-user:your-password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
PORT=1337
You can also use a local MongoDB URI like mongodb://localhost:27017/urlshortener

🚀 Running the app
Once you're ready, just run:

node server.js
And visit http://localhost:1337 in your browser. You should see a small form where you can paste a URL, add an optional slug, and get a clean short link.

