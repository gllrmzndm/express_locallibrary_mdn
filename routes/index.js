var express = require("express");
var router = express.Router();

// GET home page.
router.get("/", function (req, res) {
  // routes to catalog.js
  res.redirect("/catalog");
});

module.exports = router;
