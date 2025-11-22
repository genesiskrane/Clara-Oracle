const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("DB API");
});

router.post("/", (req, res) => {
  res.send("DB API");
});

module.exports = router;
