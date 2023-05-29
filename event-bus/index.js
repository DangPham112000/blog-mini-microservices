const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios
    .post("http://localhost:4000/events", event)
    .catch((err) => console.log("Error: ", err));
  axios
    .post("http://localhost:4001/events", event)
    .catch((err) => console.log("Error: ", err));
  axios
    .post("http://localhost:4002/events", event)
    .catch((err) => console.log("Error: ", err));

  res.send({ status: "OK" });
});

app.listen(4005, () => console.log("EVENT BUS is listening on port 4005"));
