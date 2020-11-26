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
      return res.status(200).send({
        success: true,
      });
    }
  );
});

router.post("/registerEmail", (req, res) => {
  // User.findOne(
  //     {
  //       _id: id,
  //       verified: false,
  //     },
  //     function (err, user) {
  //       if (err || !user) {
  //         return callback(err);
  //       }
  //       var token = user.generateEmailVerificationToken();
  //       Mailer.sendVerificationEmail(user.email, token);
  //       return callback(err, user);
  //     }
  //   );
  // Mailer.sendPasswordResetEmail(email, token, callback);
  var password = generator.generate({
    length: 10,
    numbers: true,
  });
//   console.log(password);
  let email = req.body.Email;
  let user = req.body.Poc;
  //  Call api
  const tokenUrl = "https://storage.dataspace.mobi/a/frontend/session";
  const login = process.env.login;
  const apassword = process.env.password;
  const type = process.env.type;
  const authInfo = { login, password, type };
//   axios
//     .post(tokenUrl, { AuthInfo: authInfo }, cookieConfig)
//     .then((res) => {
//       console.log(res.body);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
  const url = "https://storage.dataspace.mobi/a/user/upperwal";
  // const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  // };
  // axios.post(url,{Login:email, Password:password}, config ).then(
  //     (res)=>{
  //         console.log(res);
  //     }
  // ).catch(
  //     (err) =>{
  //         console.log(err);
  //     }
  // );
// Send email to User
  EmailController.sendVerificationEmail(user,email, password);
  console.log(callback);
  res.status(200).send({success:true});
});

module.exports = router;
