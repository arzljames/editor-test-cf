const instanceZUID = process.env.INSTANCE_ZUID;
const ZestySDK = require("@zesty-io/sdk");

exports.getContentItem = async (req, res) => {
  const { modelZuid, itemZuid } = req.params;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.instance.getItem(modelZuid, itemZuid);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.createContentItem = async (req, res) => {
  const { modelZuid } = req.params;
  const payload = req.body;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.instance.createItem(modelZuid, payload);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.updateContentItem = async (req, res) => {
  const { modelZuid, itemZuid } = req.params;
  const payload = req.body;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.instance.updateItem(
      modelZuid,
      itemZuid,
      payload
    );

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.publishContentItem = async (req, res) => {
  const { modelZuid, itemZuid } = req.params;
  const { publishAt, unpublishAt, version } = req.body;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.instance.publishItem(
      modelZuid,
      itemZuid,
      version,
      publishAt,
      unpublishAt
    );

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.unpublishContentItem = async (req, res) => {
  const { modelZuid, itemZuid } = req.params;
  const { publishZuid } = req.body;
  const token = req.token;
  const endpoint = `https://${instanceZUID}.api.zesty.io/v1/content/models/${modelZuid}/items/${itemZuid}/publishings/${publishZuid}`;

  try {
    // will directly use the zesty api
    // when using the sdk, it returns 401 unauthorized access error
    const response = await fetch(endpoint, {
      method: "DELETE",
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

exports.searchItem = async (req, res) => {
  const query = req.query.query ?? "";
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.instance.findItem(query);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.getPublishings = async (req, res) => {
  const { modelZuid, itemZuid } = req.params;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.instance.getItemPublishings(modelZuid, itemZuid);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.getModel = async (req, res) => {
  const { modelZuid } = req.params;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.instance.getModel(modelZuid);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.getModelFields = async (req, res) => {
  const { modelZuid } = req.params;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.instance.getModelFields(modelZuid);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};

exports.getContentItemVersions = async (req, res) => {
  const { modelZuid, itemZuid } = req.params;
  const token = req.token;

  try {
    const sdk = new ZestySDK(instanceZUID, token);
    const response = await sdk.instance.getItemVersions(modelZuid, itemZuid);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
};
