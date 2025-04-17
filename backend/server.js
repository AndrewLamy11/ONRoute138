// const express = require("express");
// const server = express();
// const port = 3000;
// const cors = require("cors");
// const mongoose = require("mongoose");
// const User = require("./models/User");
// const TruckUser = require("./models/TruckUser");
// require("dotenv").config();
// const TruckCompany = require("./models/TruckCompany"); // <-- Added model import

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const DB_URI =
//   "mongodb+srv://emirmohit17:mohitsingh720@comp1013.pdsgs0v.mongodb.net/route138?retryWrites=true&w=majority&appName=Comp1013";
// JWT_SECRET = "MySuperSecretKey123";

// server.use(cors());
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

// mongoose
//   .connect(DB_URI)
//   .then(() => {
//     server.listen(port, () => {
//       console.log(`Connected to DB\nServer is running on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// server.get("/", (request, response) => {
//   response.send("LIVE!");
// });

// // create user page
// server.post("/create-user", async (request, response) => {
//   const { username, password, firstname, lastname, email } = request.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = new User({
//     username,
//     firstname,
//     lastname,
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await newUser
//       .save()
//       .then((result) =>
//         response.status(200).send(`congrats  created username ${username}`)
//       );
//   } catch (error) {
//     console.log(`cannot add user! ${error.message}`);
//   }
// });

// // create truck user page
// server.post("/create-TruckUser", async (request, response) => {
//   const { username, password, firstname, lastname, email } = request.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newTruckUser = new TruckUser({
//     username,
//     firstname,
//     lastname,
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await newTruckUser
//       .save()
//       .then((result) =>
//         response.status(200).send(`congrats  created username ${username}`)
//       );
//   } catch (error) {
//     console.log(`cannot add user! ${error.message}`);
//   }
// });

// server.post("/", async (request, response) => {
//   const { username, password } = request.body;

//   try {
//     // Try TruckUser first
//     const truckUser = await TruckUser.findOne({ username });
//     if (truckUser) {
//       const isMatch = await bcrypt.compare(password, truckUser.password);
//       if (isMatch) {
//         const jwtToken = jwt.sign({ id: username }, JWT_SECRET);
//         return response.send({
//           message: "TruckUser Authenticated",
//           token: jwtToken,
//         });
//       } else {
//         return response.send({ message: "Incorrect username or password" });
//       }
//     }

//     // If not a TruckUser, try regular User
//     const user = await User.findOne({ username });
//     if (!user) {
//       return response.send({ message: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (isMatch) {
//       const jwtToken = jwt.sign({ id: username }, JWT_SECRET);
//       return response.send({
//         message: "User  Authenticated",
//         token: jwtToken,
//       });
//     } else {
//       return response.send({ message: "Incorrect username or password" });
//     }
//   } catch (error) {
//     console.error(error);
//     return response.status(500).send({ message: "An error occurred" });
//   }
// });

// // server.post("/NewOrderForm", (request, response) => {});

// server.post("/Results", async (req, res) => {
//   const { Pickuplocation } = req.body; // fix variable name to match frontend

//   try {
//     const results = await TruckCompany.findOne({
//       PickupLocation: Pickuplocation, // assuming your DB field is "PickupLocation"
//     });

//     // const results = await TruckCompany.findOne();

//     console.log(results);

//     res.status(200).json(results);
//   } catch (error) {
//     consoe.error("Search error:", error);
//     res.status(500).send({ message: "Error during truck search." });
//   }
// });

const express = require("express");
const nodemailer = require("nodemailer");

const server = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const TruckUser = require("./models/TruckUser");
require("dotenv").config();
const TruckCompany = require("./models/TruckCompany"); // <-- Added model import

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const DB_URI =
  "mongodb+srv://emirmohit17:mohitsingh720@comp1013.pdsgs0v.mongodb.net/route138?retryWrites=true&w=majority&appName=Comp1013";
JWT_SECRET = "MySuperSecretKey123";

server.use(
  cors({
    origin: "http://localhost:5173", // Allow the frontend (React) running on port 5173
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"], // Allow custom headers // Allow cookies and authorization headers
  })
);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

mongoose
  .connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(`Connected to DB\nServer is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

server.get("/", (request, response) => {
  response.send("LIVE!");
});

// create user page
server.post("/create-user", async (request, response) => {
  const { username, password, firstname, lastname, email } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  try {
    await newUser
      .save()
      .then((result) =>
        response.status(200).send(`congrats  created username ${username}`)
      );
  } catch (error) {
    console.log(`cannot add user! ${error.message}`);
  }
});

// create truck user page
server.post("/create-TruckUser", async (request, response) => {
  const { username, password, firstname, lastname, email } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newTruckUser = new TruckUser({
    username,
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  try {
    await newTruckUser
      .save()
      .then((result) =>
        response.status(200).send(`congrats  created username ${username}`)
      );
  } catch (error) {
    console.log(`cannot add user! ${error.message}`);
  }
});

server.post("/", async (request, response) => {
  console.log("🔥 Login request received:", request.body); // ADD THIS
  const { username, password } = request.body;

  try {
    // Try TruckUser first
    const truckUser = await TruckUser.findOne({ username });
    if (truckUser) {
      const isMatch = await bcrypt.compare(password, truckUser.password);
      if (isMatch) {
        const jwtToken = jwt.sign({ id: username }, JWT_SECRET);
        return response.send({
          message: "TruckUser Authenticated",
          token: jwtToken,
          role: "truckUser",
        });
      } else {
        return response.send({ message: "Incorrect username or password" });
      }
    }

    // If not a TruckUser, try regular User
    const user = await User.findOne({ username });
    if (!user) {
      return response.send({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const jwtToken = jwt.sign({ id: username, role: "user" }, JWT_SECRET);
      console.log("✅ Regular user found, generating token...");
      return response.send({
        message: "User  Authenticated",
        token: jwtToken,
        role: user.role,
      });
    } else {
      return response.send({ message: "Incorrect username or password" });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: "An error occurred" });
  }
});

// server.post("/NewOrderForm", (request, response) => {});

server.post("/Results", async (req, res) => {
  const { Pickuplocation, Fleetandequipmentstatistics } = req.body;

  try {
    const results = await TruckCompany.findOne({
      PickupLocation: Pickuplocation,
      Fleetandequipmentstatistics: Fleetandequipmentstatistics, // assuming your DB field is "PickupLocation"
    });

    // const results = await TruckCompany.findOne();

    // console.log(results);

    res.status(200).json(results);
  } catch (error) {
    consoe.error("Search error:", error);
    res.status(500).send({ message: "Error during truck search." });
  }
});

// server.get("/company/:companyName", async (req, res) => {
//   const companyName = req.params.companyName;
//   console.log("Searching for company:", companyName); // Debug log

//   try {
//     const company = await TruckCompany.findOne({ TruckCompany: companyName });

//     if (!company) {
//       return res.status(404).json({ error: "Company not found" });
//     }

//     res.json(company);
//   } catch (error) {
//     console.error("Error fetching company:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// GET /company/:companyName?pickup=Markham
server.get("/company/:companyName", async (req, res) => {
  const companyName = req.params.companyName;
  const pickupLocation = req.query.pickup;

  console.log(`Searching for ${companyName} at ${pickupLocation}`);

  try {
    const company = await TruckCompany.find({
      TruckCompany: companyName,
      PickupLocation: pickupLocation,
    });
    console.log("🔎 Found result:", company);
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    res.json(company[0]);
  } catch (error) {
    console.error("Error fetching company:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Route for placing an order
server.post("/order", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).send("Unauthorized");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const username = decoded.id;

    // Find user by username
    const user = await User.findOne({ username });

    if (!user) return res.status(404).send("User not found");

    const { companyName, pickupLocation } = req.body;
    console.log("✅ /order route was hit");
    // Setup email transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "singhsaaab420@gmail.com", // admin email
        pass: "ilfn ojkx lwcy zhvj", // use App Password (not your login password!)
      },
    });

    const mailOptions = {
      from: user.email,
      to: "singhsaaab420@gmail.com",
      subject: `New Truck Order from ${user.firstname} ${user.lastname}`,
      text: `
A new order was placed:

User Email: ${user.email}
Company: ${companyName}
Pickup Location: ${pickupLocation}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Order placed and email sent");
  } catch (err) {
    console.error("error processing order:", err);
    res.status(500).send("Failed to process order");
  }
});
