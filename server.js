const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

//to access Our env File
dotenv.config({ path: "./.env" });

//create a Database Connnect url from our env file
const DB = process.env.URL.replace("<password>", process.env.password);
//****************  string.replace**************
// const string = "Hey There I am Aditya"
// const string2 = string.replace("Aditya", "Unknown")
// console.log(string2);

//mongoose.connect return a promise to be handled
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((e) => {
    console.error(e);
  });

//app.listen to listen onna port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Backend Server Started on ${PORT}`);
});
