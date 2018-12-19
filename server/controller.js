const nodemailer = require("nodemailer");

module.exports = {
  contactMe: (req, res) => {
    const { email, subject, body, name } = req.body;
    console.log(email, subject, body);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.X,
        pass: process.env.Y
      }
    });
    const mailOptions = {
      from: process.env.X, // sender address
      to: process.env.Z, // list of receivers
      subject: `Portfolio Contact Me :: ${subject}`, // Subject line
      text: `${name} ${email} says: ${body}`
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }
};
