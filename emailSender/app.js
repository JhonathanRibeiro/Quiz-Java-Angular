const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>Bem vindo!!! <br><br>😃👻😃👻😃👻😃👻😃</h1>"
    );
});

app.post("/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
        console.log(`O e-mail foi enviado 😃 e o id é ${info.messageId}`);
        res.send(info);
    });
});

async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: details.email,
            pass: details.password
        }
    });

    let mailOptions = {
        from: '"Quiz App"<example.gimail.com>', // sender address
        to: user.email, // list of receivers
        subject: "Você se cadastrou no Quiz IDS 18 anos", // Subject line
        html: `<h1>Olá ${user.nome}</h1><br>
    <h4>Obrigado pela sua participação</h4>`
    };

    let info = await transporter.sendMail(mailOptions);
    callback(info);

}