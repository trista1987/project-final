import express from "express";
import cors from "cors";
import mongoose, {Schema, model}from 'mongoose'
import expressListEndpoints from 'express-list-endpoints';
import dotenv from "dotenv"
import parkData from "./data/park.json"

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/park-hive"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

//setup Schema
const parkSchema = new Schema({
  nation: String,
  name: String,
  address: String,
  rating: Number,
  opening_hours: String,
  parking_info: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
  introduction: String
});

//set model
const Park = mongoose.model ("Park", parkSchema)

//seed the database
if(process.env.RESET_DATABASE){
  const seedDatabase = async() => {

    await Park.deleteMany()
    parkData.forEach(park => {
      new Park(park).save()
    })
  }
  seedDatabase()
}
// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
// http://localhost:8080/
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints)
});

app.get("/parks", async (req, res) => {
  const allPark = await Park.find();

  if (allPark.length > 0) {
    res.json(allPark);
  } else {
    res.status(404).send("no park data was found.");
  }
});

app.get("/parks/:id", async (req, res) => {
  const parkById = await Park.findById(req.params.id)
  if(parkById){
    res.json(parkById)
  }else {
    res.status(404).send("no park data was found.")
  }
})

app.get("/parks/nation", async (req, res) => {
  try {
    const nationName = req.query.nation;
    const escapedNationName = escapeRegExp(nationName);
    const regex = new RegExp(nationName, "i");

    const nationResult = await Park.find({ nation: regex });

    if (nationResult) {
      res.json(nationResult);
    } else {
      res.status(404).send("no park data was found.");
    }
  } catch (err) {
    res.status(500).send("An error occurred while fetching park data.");
  }
});

app.get("/parks/name", async (req, res) => {
  try {
    const parkName = req.query.name;
    const escapeParkName = escapeRegExp(parkName);
    const regex = new RegExp(parkName, "i");
    const nameResult = await Park.find({ nation: regex });

    if (nameResult) {
      res.json(nameResult);
    } else {
      res.status(404).send("no park data was found.");
    }
  } catch (err) {
    res.status(500).send("An error occurred while fetching park data.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});