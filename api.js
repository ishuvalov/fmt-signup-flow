import express from "express";
const routes = new express.Router();
import db from "./db.js";
import * as uuid from "uuid";

routes.post("/register", async (req, res, next) => {
  //TODO: Server side validation

  try {
    await db.read();
    db.data = db.data || { users: [] };
    const user = req.body;
    user.id = uuid.v4();

    db.data.users.push(user);
    await db.write();

    return res.status(200).send({ result: "ok" });
  } catch (e) {
    return next(e);
  }
});

export default routes;
