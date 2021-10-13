const express = require('express');
const routes = new express.Router();

routes.post("/register", (req, res) => {
  console.log("req.body: ", req.body);
  res.status(200).send({result: 'ok'});
});


module.exports = routes
