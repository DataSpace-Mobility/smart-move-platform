var path = require("path");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

var templatesDir = path.join(__dirname, "../templates");
var Email = require("email-templates");
const dotenv = require("dotenv");
dotenv.config();
var ROOT_URL = process.env.ROOT_URL;

var HACKATHON_NAME = process.env.HACKATHON_NAME;
var EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
var TWITTER_HANDLE = process.env.TWITTER_HANDLE;

var EMAIL_HOST = process.env.EMAIL_HOST;
var EMAIL_USER = process.env.EMAIL_USER;
var EMAIL_PASS = process.env.EMAIL_PASS;
var EMAIL_PORT = process.env.EMAIL_PORT;
var EMAIL_CONTACT = process.env.EMAIL_CONTACT;
var EMAIL_HEADER_IMAGE = process.env.EMAIL_HEADER_IMAGE;
// console.log('EMAIL:',EMAIL_HOST);
if(EMAIL_HEADER_IMAGE.indexOf("https") == -1){
  EMAIL_HEADER_IMAGE = ROOT_URL + EMAIL_HEADER_IMAGE;
}

var NODE_ENV = process.env.NODE_ENV;

var options = {
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
};

var transporter = nodemailer.createTransport(smtpTransport(options));

var controller = {};

controller.transporter = transporter;

function sendOne(templateName, options, data, callback) {
  if (NODE_ENV === "dev") {
    console.log(templateName);
    console.log(JSON.stringify(data, "", 2));
  }

  const email = new Email({
    message: {
      from: EMAIL_CONTACT,
    },
    send: true,
    transport: transporter,
    preview: false,
  });

  // pass text in templates
  data.emailHeaderImage = EMAIL_HEADER_IMAGE;
  data.emailAddress = EMAIL_ADDRESS;
  data.hackathonName = HACKATHON_NAME;
  data.twitterHandle = TWITTER_HANDLE;

  email
    .send({
      locals: data,
      message: {
        subject: options.subject,
        to: options.to,
        attachments: options.attachments,
      },
      template: path.join(__dirname, "..", "emails", templateName),
    })
    .then((res) => {
      if (callback) {
        callback(undefined, res.response);
      }
    })
    .catch((err) => {
      if (callback) {
        callback(err, undefined);
      }
    });
}

controller.sendVerificationEmail = function (
  user,
  email,
  password,
  docObject,
  callback
) {
  // console.log("string", docObject);
  var options = {
    to: email,
    subject: "Welcome to Smart Move Mobility Challenge ",
    attachments: [
      {
        // utf-8 string as an attachment
        filename: "DataPartnerForm.docx",
        content: docObject,
        encoding: 'base64',
      },
    ],
  };
  var locals = {
    user: user,
    username: email,
    password: password,
  };
  sendOne("email-verify", options, locals, function (err, info) {
    if (err) {
      return callback(err, undefined);
    }
    if (info) {
      return callback(undefined, info);
    }
  });
};

module.exports = controller;
