const express = require("express");
const router = express.Router();
const { CityData } = require("../models/CityData");
const { auth } = require("../middleware/auth");

// upload City Data to database
router.post("/cityData", async (req, res) => {
  // console.log("data received ", req.body);
  if (req.body.id) {
    let id = req.body.id;
    const cityData = await CityData.findById(id).exec();
    if (cityData) {
      cityData.datasets = req.body.datasets;
      cityData.save((err, data) => {
        if (err) return res.status(500).json({ success: false, err });
        return res.status(200).json({ success: true, id: data._id });
      });
    }
  } else {
    const cityData = new CityData(req.body);
    cityData.save((err, data) => {
      if (err) return res.status(500).json({ success: false, err });
      return res.status(200).json({ success: true, id: data._id });
    });
  }
});

// Get City Data MOngoDB
router.get("/getdata" ,  (req, res) => {
  CityData.find(function (err, citydatas) {
    if (err) return res.status(500).json({ success: false, err });
    res.status(200).send(citydatas);
  });
});

module.exports = router;
