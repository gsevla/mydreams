import { Router } from "express";

import database from "../database";

export default (router: Router) => {
  router.get("/dream", async (req, res) => {
    try {
      const response = await database.models.dream.findAll();
      return res.send(response);
    } catch (error) {
      return res.status(400).send({ error });
    }
  });

  router.get("/dream/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const response = await database.models.dream.findByPk(id);
      return res.send(response);
    } catch (error) {
      return res.status(400).send({ error });
    }
  });

  router.post("/dream", async (req, res) => {
    try {
      const response = await database.models.dream.create(req.body);
      return res.status(201).send(response);
    } catch (error) {
      return res.status(400).send({ error });
    }
  });

  router.patch("/dream/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const response = await database.models.dream.update(req.body, {
        where: { id },
      });
      return res.send(response);
    } catch (error) {
      return res.status(400).send({ error });
    }
  });

  router.delete("/dream/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const dream = await database.models.dream.findByPk(id);
      await dream?.destroy();
      return res.sendStatus(204);
    } catch (error) {
      return res.status(400).send({ error });
    }
  });
};
