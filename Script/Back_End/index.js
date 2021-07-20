const express = require("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;
const { request, response } = require("express");
const connectionString =
  "mongodb+srv://steveboah:Testing123@quotation.i17rn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//create the dummy server
server = express();
server.use(express.json());
server.use(cors());

//connecting to the database to perform CRUD
mongoClient
  .connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    //create the database object
    const liquorDB = client.db("liquorDB");
    //create the three tables:product,customer and order
    const productTable = liquorDB.collection("products");
    const customerTable = liquorDB.collection("customer");
    const orderTable = liquorDB.collection("orders");
    console.log("Connected to Database");

    //read from the database
    server.get("/liquor", (request, response) => {});

    //create new row(s)
    server.post("/liquor", (request, response) => {});

    //update items in the database
    server.put("/liquor", (request, response) => {});

    //delete item from the database
    server.delete("/liquor", (request, response) => {});
  })
  .catch((err) => console.error(err));
const available_port = process.env.PORT || 3000;
//dummy server listening to any available port
server.listen(available_port, () => {
  console.log(`Listing to port: ${available_port}`);
});
