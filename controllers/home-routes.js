const router = require("express").Router();
// const { User, Post, Comment } = require("../../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = router;
