const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const SeedArray = require("./seed/companies.json");
const Company = require("./models/companiesData");

// Bodyparser Middleware
app.use(express.json());

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/traded";

let counter = 0;

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
})
.then(() => {console.log("MongoDB connected and ready to be seeded")
    
SeedArray.forEach((object => {
  const company = new Company({
       name: object.name,
       symbol: object.symbol
   });
   company.save((err,result) => {
      counter++;
      if (counter === SeedArray.length) {
          console.log("=========Seeding Completed=========")
          // disconnectDB()
      }
      else {console.log("Company added")}
   });
}));
}).catch(err => console.log(err))

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/company', require('./routes/api/company'));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});