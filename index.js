const express = require("express");
const SDK = require("@zesty-io/sdk");

const app = express();

app.use(express.json());

// content item details
app.get("/content-item/:modelZuid/:itemZuid", async (req, res) => {
  const { modelZuid, itemZuid } = req.params;

  console.log(token);
  if (!req.headers?.authorization) {
    res.status(401).send({ error: "Unauthorized access" });
    return;
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const sdk = new SDK("8-f8dab0b3cb-46x3f0", token);
    const response = await sdk.instance.getItem(modelZuid, itemZuid);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
});

// content item creation
app.post("/content-item/:modelZuid/create", async (req, res) => {
  const { modelZuid } = req.params;
  const payload = req.body.payload;

  if (!req.headers?.authorization) {
    res.status(401).send({ error: "Unauthorized access" });
    return;
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const sdk = new SDK("8-f8dab0b3cb-46x3f0", token);
    const response = await sdk.instance.createItem(modelZuid, payload);

    res.send(response);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Something went wrong!" });
  }
});

// content item update
app.put("/content-item/:modelZuid/:itemZuid", async (req, res) => {
  const { modelZuid, itemZuid } = req.params;
  const payload = req.body.payload;

  if (!req.headers?.authorization) {
    res.status(401).send({ error: "Unauthorized access" });
    return;
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const sdk = new SDK("8-f8dab0b3cb-46x3f0", token);
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
});

// update item
app.put("/", async (req, res) => {
  const sdk = new SDK(
    "8-f8dab0b3cb-46x3f0",
    "PTK-chlqt6b4m5qr5z73x1qgvrbdc631pddt1qlt85qclcxws"
  );
  const response = await sdk.instance.updateItem(
    "6-92cd8ab9e6-26dl95",
    "7-9ca69f9acb-m5qfrb",
    {
      //payload here
    }
  );
  console.log(response);
  res.send("hello world");
});

app.listen(3000, () => console.log("app started"));
