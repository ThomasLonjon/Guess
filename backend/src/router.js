const express = require("express");
require("dotenv").config();

const router = express.Router();
const axios = require("axios");

const itemControllers = require("./controllers/itemControllers");
const nasa = require("./nasa.json");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/api/game/data", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.API_TOKEN}&page_size=100`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/api/music/data", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.deezer.com/chart/0?limit=500`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/api/nasa/data", async (req, res) => {
  res.json(nasa);
});
module.exports = router;
