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
const instanceRoute = require("./app/routes/instanceRoute");
const authRoute = require("./app/routes/authRoute");
const mediaRoute = require("./app/routes/mediaRoute");

app.use(express.json());
app.use(limiter);
app.use(
  cors({
    credentials: true,
    origin: [/^https?:\/\/localhost(:[0-9]+)?$/, ...allowedOrigins.split(",")],
  })
);

app.use("/api/v1/instance", instanceRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/media", mediaRoute);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
