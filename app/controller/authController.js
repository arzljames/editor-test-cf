const ZestySDK = require("@zesty-io/sdk");
const isProd = process.env.PRODUCTION;
const instanceZUID = isProd
  ? process.env.DEV_INSTANCE_ZUID
  : process.env.PROD_INSTANCE_ZUID;

exports.verifyToken = async (req, res) => {
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.auth.verifyToken(token);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.getUser = async (req, res) => {
  const { userZuid } = req.params;
  const token = req.token;
  const endpoint = `https://accounts.api.zesty.io/v1/users/${userZuid}`;

  try {
    // will directly use the zesty api
    // no getUser function found on zesty sdk
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    res.send(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};
