require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

// add middlewares for prod only
console.log("[Environment] ", process.env.ENVIRONMENT);
if (process.env.ENVIRONMENT === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, ".", "build")));
  app.use(express.static("public"));
  app.use(helmet());

  // for dev, open localhost on port 5000, ignore this
  app.get("/", (req, res) => {
    console.log("Serve build folder to client");
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}

// comment out if code is intended for controlled environment deployment 
const corsPortToUse =
  process.env.ENVIRONMENT === "DEVELOPMENT"
    ? process.env.WEB_PORT
    : process.env.APP_PORT;

// for dev only
const corsOptions = {
  origin: `http://localhost:${corsPortToUse}`, // change origin if code intended for controlled environment deployment 
  methods: "GET,POST",
  preflightContinue: true,
  optionsSuccessStatus: 200,
};

app.use(
  express.urlencoded({
    extended: true,
  }),
  cors(corsOptions),
  express.json()
);

app.listen(process.env.APP_PORT, () => {
  console.log(`React app listening on port ${process.env.APP_PORT}!`);
});

app.get("/about", (req, res) => {
  console.log("[Request -- GET] Received", req.query);
  res.set("Access-Control-Allow-Origin", "*");
  const data = {
    name: "Clare",
    lastName: "Lim",
    role: "Full-Stack Software Developer",
    startWorkDate: "2016/11/01",
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
    currentWork: "Full-Stack Software Developer",
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
      joined: "2016/11/01",
      left: "2021/03/15",
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
      joined: "2021/03/22",
      lefted: null,
      present: true,
      company: "IDEMIA Singapore",
      duration: "0.6 year",
      role: "Full-Stack Software Developer",
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
    { tech: "JavaScript", level: 85, start: "2016/11/01" },
    { tech: "Angular1/2+", level: 80, start: "2016/11/01" },
    { tech: "2D GIS Map", level: 85, start: "2016/11/01" },
    { tech: "OpenLayers", level: 75, start: "2016/11/01" },
    { tech: "C2/C3 Systems", level: 85, start: "2016/11/01" },
    { tech: "NoSQL", level: 75, start: "2017/02/01" },
    { tech: "RedMine", level: 70, start: "2017/02/01" },
    { tech: "CI/CD", level: 80, start: "2017/08/01" },
    { tech: "JIRA", level: 75, start: "2017/08/01" },
    { tech: "GitLab", level: 75, start: "2017/08/01" },
    { tech: "NodeJS", level: 80, start: "2018/01/01" },
    { tech: "ReactJS/TS", level: 70, start: "2021/05/01" },
    { tech: "ReactNative", level: 70, start: "2021/05/01" },
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
      yearStart: 2020,
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
      name: "eConsole Web Application (Air)",
      domain: "Border Control Operations",
      customer: "ICA",
      devRole: "Full Stack",
      tech: "Angular 11, NodeJS",
      yearStart: 2021,
      yearEnd: null,
    },
    {
      name: "eConsole Web Application (Land & Sea)",
      domain: "Border Control Operations",
      customer: "ICA",
      devRole: "Full Stack",
      tech: "Angular 11, NodeJS",
      yearStart: 2021,
      yearEnd: null,
    },
    {
      name: "eMarshal iOS Application (Air)",
      domain: "Border Control Operations",
      customer: "ICA",
      devRole: "Full Stack",
      tech: "React Native, NodeJS",
      yearStart: 2021,
      yearEnd: null,
    },
    {
      name: "eMarshal iOS Application (Land & Sea)",
      domain: "Border Control Operations",
      customer: "ICA",
      devRole: "Full Stack",
      tech: "React Native, NodeJS",
      yearStart: 2021,
      yearEnd: null,
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

function sendAcknowledgementEmail({ transporter, body, response }) {
  const mailOptionsToVisitor = {
    from: process.env.EMAIL,
    to: body.email,
    subject: `[${process.env.NAME}] Message Received`,
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
      response.message = `[Send email to visitor @ ${
        body.email
      }]: ${JSON.stringify(error)}`;

      return response;
    } else {
      console.log(`[Send email to visitor @ ${body.email}]: ${info.response}`);
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
    to: process.env.MY_EMAIL, // send email to personal email
    subject: "[Portfolio] Email from " + body.name,
    text: body.message,
  };

  let response = {
    data: [],
    status: "OK",
    message: "Successfully sent email to visitor 🎈",
  };

  transporter.sendMail(mailOptionsToSelf, function (error, info) {
    if (error) {
      console.error("[transporter.sendMail(mailOptionsToSelf)] Error: ", error);
      response.status = "FAILED";
      response.message = `[Send email to self @ ${
        process.env.MY_EMAIL
      }]: ${JSON.stringify(error)}`;
      res.send(response);
    } else {
      console.log(
        `[Send email to self @ ${process.env.MY_EMAIL}]: ${info.response}`
      );
      response = sendAcknowledgementEmail({ transporter, body, response });
      res.send(response);
    }
  });
});
