const express = require("express");
const router = express.Router();
const { CityData } = require("../models/CityData");
const { auth } = require("../middleware/auth");

// upload CityData to database
router.post("/cityData", async (req, res) => {
  // console.log("data received ", req.body);
  if (req.body.id) {
    let id = req.body.id;
    const cityData = await CityData.findById(id).exec();
    if (cityData) {
      cityData.datasets = req.body.datasets;
      await cityData.save();
    }
  } else {
    const cityData = new CityData(req.body);
    cityData.save((err, data) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, id: data._id });
    });
  }
});

// Get City Data MOngoDB
router.get("/getdata", (req, res) => {
  CityData.find(function (err, citydatas) {
    if (err) return console.error(err);
    res.send(citydatas);
  });
});

module.exports = router;
