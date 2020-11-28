const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");
const EmailController = require("../emails/email");
var generator = require("generate-password");
const axios = require("axios");

// const async = require('async');

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAuth: true,
    email: req.user.email,
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true,
      });
    }
  );
});

router.post("/registerEmail", (req, res) => {
  var pass = generator.generate({
    length: 10,
    numbers: true,
  });
  //   console.log(pass);
  let email = req.body.Email;
  let user = req.body.Poc;
  let docObject = req.body.doc;
  //  Call api for register user
  const tokenUrl = "https://storage.dataspace.mobi/a/frontend/session";
  const url = "https://storage.dataspace.mobi/a/user/upperwal";
  const login = process.env.LOGIN;
  const password = process.env.PASSWORD;
  const type = process.env.TYPE;
  const authInfo = { login, password, type };
  axios
    .post(tokenUrl, {
      AuthInfo: authInfo,
    })
    .then((response) => {
      const token = response.data.JWT;
      // console.log("token:", response.data.JWT);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const reqbody = {
        GroupPath: "",
        Attributes: {
          profile: "standard",
        },
        Login: email,
        Password: pass,
      };
      axios
        .put(url, reqbody, config)
        .then((response) => {
          // console.log(response.data);

          // Send email to User
          EmailController.sendVerificationEmail(
            user,
            email,
            pass,
            docObject,
            function (err, info) {
              if (err) {
                console.log(err);
                return res.json({ message: err });
              }
              if (info) {
                return res.json({ message: "User Created" });
              }
            }
          );
          // return res.json({ message: "User Created" });
        })
        .catch((err) => {
          console.log("user creation error:", err.response.data);
          const error = err.response.data;
          return res.json({ message: error });
        });
    })
    .catch((err) => {
      console.log("token error:", err);
      return res.json({ message: err.response.data });
    });
});

module.exports = router;
