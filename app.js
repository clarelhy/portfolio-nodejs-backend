require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

// add middlewares
app.use(
  express.static(path.join(__dirname, "../portfolio-reactjs-frontend", "build"))
);
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  }),
  cors(),
  express.json()
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  console.log("[Request -- GET] Received", req.query);
  res.set("Access-Control-Allow-Origin", "*");
  const data = {
    name: "Clare",
    lastName: "Lim",
    role: "Full-Stack Developer",
    yoe: "5",
    image: "../portfolio-reactjs-frontend/src/assets/images/AboutMe.jpg",
    resume: "",
    description: "",
    interests: [
      "Space-exploration",
      "Ancient History/Mythology",
      "Xeno-archaeology",
      "Tattoos",
      "Music",
    ],
    techInterests: [
      "React / Vue",
      "JavaScript / TypeScript / Python",
      "UI/UX",
      "Container Tech (Docker etc)",
      "Cloud Tech (AWS etc)",
      "AI/ML",
    ],
    currentWork: "Full-Stack Developer",
    currentCompany: "IDEMIA Singapore",
    currentCompanyWebsite: "http://idemia.com",
    education:
      "Double Major in Computer Science, Cyber Forensics & Info-sec and Management",
  };

  const queryFields = req?.query?.fields ? JSON.parse(req.query.fields) : [];
  let filteredData = {};
  queryFields.forEach((field) => (filteredData[field] = data[field]));

  const response = {
    data: queryFields.length === 0 ? data : filteredData,
    status: "OK",
    message: "Successfully received about 🎈",
  };
  res.send(response);
  console.log("[Request -- GET] Responded", response);
});

app.get("/experience", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = [
    {
      yearJoined: 2016,
      yearLeft: 2021,
      present: false,
      company: "ST Engineering Electronics",
      duration: "4.5 years",
      role: "Full-Stack Software Engineer",
      scope:
        "2D GIS Map Specialist, Team Lead in Turn-key SCRUM Team, In-house Framework Developer, Ops Monitoring Web Apps with AngularJS/NodeJS, Map Consultant for Pre-sales & BD.",
    },
    {
      yearJoined: 2021,
      yearLeft: null,
      present: true,
      company: "IDEMIA Singapore",
      duration: "0.6 year",
      role: "Full-Stack Developer",
      scope:
        "Running SCRUM, Angular2+ Web Applications, NodeJS, React Native iOS mobile application for border-control systems in Singapore.",
    },
  ];
  const response = {
    data,
    status: "OK",
    message: "Successfully received experience 🎈",
  };
  res.send(response);
});

app.get("/techstack", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = [
    { tech: "JavaScript", level: 85, yoe: 5 },
    { tech: "Angular1/2+", level: 80, yoe: 5 },
    { tech: "2D GIS Map", level: 85, yoe: 5 },
    { tech: "OpenLayers", level: 75, yoe: 5 },
    { tech: "C2/C3 Systems", level: 85, yoe: 5 },
    { tech: "CI/CD", level: 80, yoe: 4 },
    { tech: "NoSQL", level: 75, yoe: 4 },
    { tech: "JIRA", level: 75, yoe: 4 },
    { tech: "GitLab", level: 75, yoe: 4 },
    { tech: "NodeJS", level: 80, yoe: 3.5 },
    { tech: "ReactJS/TS", level: 70, yoe: 1 },
    { tech: "ReactNative", level: 70, yoe: 1 },
  ];

  const response = {
    data,
    status: "OK",
    message: "Successfully received tech stack 🎈",
  };
  res.send(response);
});

app.get("/strength", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = [
    "JavaScript",
    "TypeScript",
    "Angular1/2+",
    "2D GIS Map",
    "C2/C3 Systems",
    "Front-end Dev",
    "API Design",
  ];

  const response = {
    data,
    status: "OK",
    message: "Successfully received tech stack 🎈",
  };
  res.send(response);
});

app.get("/projects", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = [
    {
      name: "Airport Operations Command System",
      domain: "Airport Operations",
      customer: "Changi Airport Group",
      devRole: "Front-end",
      tech: "JavaScript/PCT Web Portal",
      yearStart: 2016,
      yearEnd: 2017,
    },
    {
      name: "Automated Terminal Control System, Pasir Panjang Terminal",
      domain: "Sea-port Operations",
      customer: "PSA Singapore",
      devRole: "Full Stack",
      tech: "AngularJS, NodeJS, OpenLayers, 2D GIS Map",
      yearStart: 2018,
      yearEnd: 2018,
    },
    {
      name: "Chong Qing Smart Water Exhibit",
      domain: "Smart Water Management Operations",
      customer: "PUB",
      devRole: "Full Stack",
      tech: "AngularJS, NodeJS, OpenLayers, 2D GIS Map",
      yearStart: 2019,
      yearEnd: 2019,
    },
    {
      name: "SENSE360-ST1 POC, Brani Terminal",
      domain: "Sea-port Operations",
      customer: "PSA Singapore",
      devRole: "Full Stack",
      tech: "AngularJS, NodeJS, OpenLayers, 2D GIS Map",
      yearStart: 2017,
      yearEnd: 2020,
    },
    {
      name: "SENSE360, Portugal Terminal",
      domain: "Sea-port Operations",
      customer: "PSA International",
      devRole: "Full Stack",
      tech: "AngularJS, NodeJS, OpenLayers, 2D GIS Map",
      yearStart: 2019,
      yearEnd: 2019,
    },
    {
      name: "2D GIS Map Codeless-Configurator",
      domain: "Air/Land/Sea",
      customer: "PSA/PSAI/PUB/CAG/CPIB",
      devRole: "Full Stack",
      tech: "AngularJS, NodeJS, OpenLayers, 2D GIS Map",
      yearStart: 2017,
      yearEnd: 2020,
    },
    {
      name: "Tuas Command Control System",
      domain: "Sea-port Operations",
      customer: "PSA Singapore",
      devRole: "Full Stack",
      tech: "AngularJS, NodeJS, OpenLayers, 2D GIS Map",
      yearStart: 2020,
      yearEnd: 2020,
    },
    {
      name: "Intelligent Water Management System",
      domain: "Smart Water Management Operations",
      customer: "PUB",
      devRole: "Full Stack",
      tech: "AngularJS, NodeJS, OpenLayers, 2D GIS Map",
      year: 2020,
      yearEnd: 2020,
    },
    {
      name: "Command, Control & Communicate (C3) System",
      domain: "Police Operations",
      customer: "PUB",
      devRole: "Full Stack",
      tech: "AngularJS, NodeJS, OpenLayers, 2D GIS Map",
      yearStart: 2020,
      yearEnd: 2021,
    },
    {
      name: "eConsole Web Application (Air/Land/Sea)",
      domain: "Border Control Operations",
      customer: "ICA",
      devRole: "Full Stack",
      tech: "Angular 11, NodeJS",
      yearStart: 2021,
      yearEnd: null,
      ongoing: true,
    },
    {
      name: "eMarshal iOS Application",
      domain: "Border Control Operations",
      customer: "ICA",
      devRole: "Full Stack",
      tech: "React Native, NodeJS",
      yearStart: 2021,
      yearEnd: null,
      ongoing: true,
    },
  ];

  const response = {
    data,
    status: "OK",
    message: "Successfully received projects 🎈",
  };
  res.send(response);
});

app.get("/contact", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = {
    email: "lhy.clare@gmail.com",
    linkedIn: "http://linkedin.com/in/clare-lhy",
    github: "http://github.com/clarelhy",
  };

  const response = {
    data,
    status: "OK",
    message: "Successfully received contact 🎈",
  };
  res.send(response);
});

app.get("/footer", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = {
    networks: [
      {
        id: nanoid(),
        name: "linkedin",
        url: "",
      },
      {
        id: nanoid(),
        name: "github",
        url: "",
      },
    ],
  };

  const response = {
    data,
    status: "OK",
    message: "Successfully received footer 🎈",
  };
  res.send(response);
});

function sendAcknowledgementEmail({ transporter, body, response }) {
  const mailOptionsToVisitor = {
    from: process.env.EMAIL,
    to: body.email,
    subject: "[Clare] Message Received",
    html: `<!DOCTYPE html>
        <html>
          <body>
            <div style="font-family: Verdana, sans-serif; color: 'black'">
              Hello ${body.name}, 
              <br />
              <p>
                Thank you for contacting me.
                <br />
                I will get back to you as soon as possible.
              </p>
              <p>
                Best Regards,
                <br />
                ${process.env.NAME}
              </p>
            </div>
          </body>
        </html>`,
  };

  transporter.sendMail(mailOptionsToVisitor, function (error, info) {
    if (error) {
      console.error(error);
      response.status = "FAILED";
      response.message = error;

      return response;
    } else {
      console.log("Email sent to visitor: " + info.response);
      response.message = info.response;

      return response;
    }
  });
}

app.post("/sendEmail", async (req, res) => {
  const body = req.body;
  console.log("[Request -- POST -- sendEmail] Received", req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PW,
    },
  });

  const mailOptionsToSelf = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_PW,
    subject: "[Portfolio] Email from " + body.name,
    text: body.message,
  };

  let response = {
    data: [],
    status: "OK",
    message: "Successfully sent email to visitor 🎈",
  };

  await transporter.sendMail(mailOptionsToSelf, function (error, info) {
    if (error) {
      console.error(error);
      response.status = "FAILED";
      response.message = error;
    } else {
      console.log("Email sent to myself: " + info.response);
      response = sendAcknowledgementEmail({ transporter, body, response });
    }
  });

  res.send(response);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
