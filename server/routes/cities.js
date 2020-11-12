const express = require("express");
const router = express.Router();
const { CityData } = require("../models/CityData");
const { auth } = require("../middleware/auth");

// upload CityData to database
router.post("/data", (req, res) => {
  // console.log('post data');
  console.log("data received ", req.body);
  //save all the data we got from the client into the DB
  const cityData = new CityData(req.body);

  cityData.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

// Get City Data MOngoDB
router.get("/getdata", (req, res) => {
  CityData.find(function (err, citydatas) {
    if (err) return console.error(err);

    res.send(citydatas);
  });
});

module.exports = router;
