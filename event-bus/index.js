const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  console.log(event.type);

  events.push(event);

  axios
    .post("http://posts-clusterip-srv:4000/events", event)
    .catch((err) => console.log(err));
  // axios
  //   .post("http://localhost:4001/events", event)
  //   .catch((err) => console.log(err));
  // axios
  //   .post("http://localhost:4002/events", event)
  //   .catch((err) => console.log(err));
  // axios
  //   .post("http://localhost:4003/events", event)
  //   .catch((err) => console.log(err));

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => console.log("EVENT BUS is listening on port 4005"));
