const express = require('express');
const routes = new express.Router();

routes.get("/hello", (req, res) => {
  console.log("request accepted");
  res.send({ express: "Hello From Express" });
});

routes.post("/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});


module.exports = routes
