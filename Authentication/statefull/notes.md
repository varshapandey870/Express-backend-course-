# 🌈 Stateful Authentication in Express (Node.js)

---

## 🔐 1. What is Stateful Authentication?

**Stateful authentication** means the server **stores the user's session state** 🧠. After login, the server remembers the user using a **session ID**, usually stored in a **cookie** 🍪 on the client.

> ✨ In short: **Server remembers you.**

---

## 🔄 2. How Stateful Authentication Works (Flow)

🟢 **Step-by-step flow**

1️⃣ User logs in with email & password
2️⃣ Server verifies credentials
3️⃣ Server creates a **session**
4️⃣ Server stores session data (userId, role)
5️⃣ Server sends **session ID in a cookie** 🍪
6️⃣ Browser sends cookie with every request
7️⃣ Server checks session data to authenticate user

---

## 🧩 3. Key Components in Express

### 🧠 a) Sessions

A session is an object stored on the server.

📦 Example session data:

```js
{
  userId: "123",
  role: "admin",
  isLoggedIn: true
}
```

### 🍪 b) Cookies

Cookies store **only the session ID**, not user data.

📄 Example:

```txt
connect.sid=s%3Aqwerty123
```

---

## 📦 4. Required Packages

```bash
npm install express express-session connect-mongo
```

🛠️ What they do:

* `express-session` → session handling
* `connect-mongo` → store sessions in MongoDB

---

## ⚙️ 5. Basic Session Setup

```js
import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();

app.use(session({
  name: "session-id",
  secret: "mySecretKey",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: "mongodb://localhost:27017/sessions"
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // ⏰ 1 hour
  }
}));
```

---

## 🔑 6. Login Route (Create Session)

```js
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // ✅ Assume user is verified
  req.session.user = {
    id: "123",
    email: email,
    role: "user"
  };

  res.send("🎉 Logged in successfully");
});
```

---

## 👀 7. Accessing Session Data

```js
app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("❌ Not authenticated");
  }

  res.json(req.session.user);
});
```

---

## 🛡️ 8. Auth Middleware (Protected Routes)

```js
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send("🚫 Unauthorized");
  }
};

app.get("/dashboard", isAuthenticated, (req, res) => {
  res.send("🏠 Welcome to dashboard");
});
```

---

## 🚪 9. Logout (Destroy Session)

```js
app.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("session-id");
    res.send("👋 Logged out successfully");
  });
});
```

---

## 🗄️ 10. Where Session Data is Stored

📍 Options:

* ❌ Default → Memory (not recommended)
* ✅ Production → Database

⭐ Recommended stores:

* 🍃 MongoDB → `connect-mongo`
* ⚡ Redis → `connect-redis`

---

## ✅ 11. Pros of Stateful Authentication

✔ Simple to implement
✔ Easy logout (destroy session)
✔ Secure (server controls state)

---

## ❌ 12. Cons of Stateful Authentication

✖ Hard to scale (needs shared session store)
✖ More server memory usage
✖ Not ideal for microservices

---

## ⚖️ 13. Stateful vs Stateless (JWT)

| 🧩 Feature         | 🧠 Stateful   | 🪪 Stateless (JWT) |
| ------------------ | ------------- | ------------------ |
| Server stores data | ✅ Yes         | ❌ No               |
| Logout             | ✅ Easy        | ❌ Hard             |
| Scalability        | ⚠️ Medium     | 🚀 High            |
| Token stored       | 🍪 Session ID | 🔐 JWT             |

---

## 🎯 14. When to Use Stateful Auth

✔ Small to medium apps
✔ Traditional web apps
✔ Admin panels

---

## 🗣️ 15. Interview One-Liner

> 💡 **Stateful authentication stores session data on the server and uses a session ID stored in cookies to authenticate users.**

---

🎉 **End of Colorful Notes**
