const ZestySDK = require("@zesty-io/sdk");
const instanceZUID = process.env.INSTANCE_ZUID;

exports.getFile = async (req, res) => {
  const { fileZuid } = req.params;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.media.getFile(fileZuid);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.getMediaGroup = async (req, res) => {
  const { groupZuid } = req.params;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.media.getGroup(groupZuid);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.getMediaGroups = async (req, res) => {
  const { binZuid } = req.params;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.media.getGroups(binZuid);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};
