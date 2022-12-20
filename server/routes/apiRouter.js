const express = require("express");
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

//Read Images
router.get("/:search", async function (req, res) {
  const { search } = req.params;
  console.log(
    `https://pixabay.com/api/?key=32219588-e6118bfce97b918d33cf6a3e9&q=${search}&image_type=photo`
  );
  const url = `https://pixabay.com/api/?key=32219588-e6118bfce97b918d33cf6a3e9&q=${search}&image_type=photo`;

  try {
    let response = await fetch(url);
    response = await response.json();
    res.status(200).json(response);
    console.log("Successfully fetched pictures");
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Error at ImageSearch" });
  }
});

module.exports = router;
