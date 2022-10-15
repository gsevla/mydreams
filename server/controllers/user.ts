import { Router } from "express";

export default (router: Router) => {
  router.get("/user", async (req, res) => {
    try {
      console.log("body", req.body);
      //   const response = await database.models.dream.findAll();
      return res.status(201).send("OK");
      //   return res.send(response);
    } catch (error) {
      return res.status(400).send({ error });
    }
  });

  router.post("/user/authenticate", async (req, res) => {
    try {
      console.log("body", req.body);
      //   const response = await database.models.dream.findAll();
      return res.send("OK");
    } catch (error) {
      return res.status(400).send({ error });
    }
  });
};
