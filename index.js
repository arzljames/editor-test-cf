require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3001;
const allowedOrigins = process.env.ALLOWED_ORIGINS ?? [];
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes interval
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later.", // Message sent when limit is exceeded
  headers: true, // Send rate limit info in the `RateLimit-*` headers
});

// routes
const contentRoute = require("./app/routes/contentRoute");

app.use(express.json());
app.use(limiter);
app.use(
  cors({
    credentials: true,
    origin: [/^https?:\/\/localhost(:[0-9]+)?$/, ...allowedOrigins.split(",")],
  })
);

app.use("/api/v1/content", contentRoute);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
