const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "magnolia.kozey37@ethereal.email",
            pass: "651ak7btk5sFjX566P",
        },
    });

    const info = await transporter.sendMail({
        from: '"Eleazar Goyette"<eleazar62@ethereal.email>',
        to: "baz@example.com",
        subject: "Send fake email",
        html: "<h2>Sending emails with Node.JS</h2>",
    });
    res.json(info);
};

module.exports = sendEmail;
