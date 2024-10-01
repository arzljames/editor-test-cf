exports.extractToken = (req, res, next) => {
  try {
    if (!req.headers.authorization)
      res.status(401).send({ error: "Unauthorized access" });

    const token = req.headers.authorization.split(" ")[1];
    req.token = token;
    next();
  } catch (error) {
    res.status(500).send({ error: "Something went wrong!" });
  }
};
