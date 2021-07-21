const express = require("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;
//const { response } = require("express");
//const { request, response } = require("express");
const connectionString =
  "mongodb+srv://Amazon_Liquor:Amazon_Liquor@amazonliquorcluster.g6efq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
<<<<<<< HEAD
=======

>>>>>>> 77ca9128f7a48a8375ecccc867ee5de7ae08130a
//create the dummy server
server = express();
server.use(express.json());
server.use(cors());

//connecting to the database to perform CRUD
mongoClient
  .connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    //create the database object
<<<<<<< HEAD
=======

>>>>>>> 77ca9128f7a48a8375ecccc867ee5de7ae08130a
    const liquorDB = client.db("Amazon_Liquor");
    //create the three tables:product,customer and order
    const productTable = liquorDB.collection("Products_Collection");
    productTable.createIndex({ Brand: "text" });
    const customerTable = liquorDB.collection("Customer_Collection");
    const orderTable = liquorDB.collection("Orders_Collection");
    console.log("Connected to Database");

    //read from the database
    //products
    server.get("/products", (request, response) => {
      const productCursor = productTable
        .find({})
        .toArray()
        .then((data) => response.send(data));
    });
    //orders
    server.get("/orders", (request, response) => {
      const orderCursor = orderTable
        .find({})
        .toArray()
        .then((data) => response.send(data));
    });

    //customers
    server.get("/customers", (request, response) => {
      const customerCursor = customerTable
        .find({})
        .toArray()
        .then((data) => response.send(data));
    });

    //create new row(s)
    //add new product
    server.post("/products", (request, response) => {
      productTable
        .insertOne(request.body)
        .then((status) => {
          response.send({ message: "success" });
        })
        .catch((err) => response.status(400).send(err));
    });

    //order
    server.post("/orders", (request, response) => {
      orderTable
        .insertOne(request.body)
        .then((status) => response.send({ message: "success" }))
        .catch((err) => response.status(400).send(err));
    });

    server.post("/customers", (request, response) => {
      customerTable
        .insertOne(request.body)
        .then((status) => response.send({ message: "success" }))
        .catch((err) => response.status(400).send(err));
    });

    //search for items
    server.get("/products/search", (request, response) => {
      let query = {};
      let { brand, volume, alcohol_percentage, category, retail_price } =
        request.body;

      if (brand !== undefined) {
        brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
        query["Brand"] = brand;
      }

      if (volume !== undefined) {
        query["Volume"] = volume;
      }
      if (alcohol_percentage !== undefined) {
        query["Alcohol_Percentage"] = alcohol_percentage;
      }
      if (category !== undefined) {
        query["Category"] = category[0]
          .toUpperCase()
          .category.slice(1)
          .toLowerCase();
      }
      if (retail_price !== undefined) {
        query["Retail_Price"] = retail_price;
      }
      console.log(query);
      const productCursor = productTable
        .find(query)
        .toArray()
        .then((data) => response.send(data))
        .catch((err) => response.status(400).send(err));
    });

    //orders
    server.get("/orders/search", (request, response) => {
      let params = {};
      let { _id: orderID } = request.body || request.query._id;
      if (orderID === undefined) {
        return response.status(400).send("order ID is required");
      }
      if (orderID !== undefined) {
        params["_id"] = orderID;
      }
      const orderCursor = orderTable
        .find(params)
        .toArray()
        .then((data) => {
          if (data.length === 0) {
            response.send(`Sorry, order with ID ${orderID} does not exist`);
          } else {
            response.send(data);
          }
        })
        .catch((err) => response.status(400).send(err));
    });

    //customers
    server.get("/customers/search", (request, response) => {
      let queryParameters = {};
      // response.send(request.query || request.body);
      let _id = request.body._id || parseInt(request.query._id);
      let email = request.body.email || request.query.email;
      if (_id === undefined && email === undefined) {
        return response
          .status(400)
          .send("Either the _id or email must be provided");
      }
      if (_id !== undefined) {
        queryParameters["_id"] = _id;
      }
      if (email !== undefined) {
        queryParameters["Email"] = email;
      }
      //response.send(queryParameters);
      customerTable
        .find(queryParameters)
        .toArray()
        .then((data) => {
          if (data.length === 0) {
            response
              .status(200)
              .send(`Customer with ID ${_id} or ${email} does not exist`);
          } else {
            response.send(data);
          }
        })
        .catch((err) => {
          response.status(400).send(err);
        });
    });

    //update items in the database
    //products
    server.put("/products/update", (request, response) => {
      let queryParam = {};
      let keyPara = {};
      let _id = request.query._id || request.body._id;
      console.log(_id);
      let { brand, volume, alcohol_percentage, category, retail_price } =
        request.body;
      if (_id === undefined) {
        return response.status(400).send("_id is required");
      }
      keyPara["_id"] = parseInt(_id);
      if (brand !== undefined) {
        queryParam["Brand"] =
          brand[0].toUpperCase() + brand.slice(1).toLowerCase();
      }
      if (volume !== undefined) {
        queryParam["Volume"] = volume;
      }
      if (alcohol_percentage !== undefined) {
        queryParam["Alcohol_Percentage"] = alcohol_percentage;
      }
      if (category !== undefined) {
        queryParam["Category"] =
          category[0].toUpperCase() + category.slice(1).toLowerCase();
      }
      if (retail_price !== undefined) {
        queryParam["Retail_Price"] = retail_price;
      }
      console.log(queryParam);
      console.log(keyPara);
      productTable
        .updateOne(keyPara, {
          $set: queryParam,
        })
        .then((data) => response.send(data))
        .catch((err) => response.status(404).send(err));
    });

    //orders
    server.put("/orders/update", (request, response) => {});

    //customers
    server.put("/customers/update", (request, response) => {});

    //delete item from the database
    //products
    server.delete("/products/delete", (request, response) => {});

    //orders
    server.delete("/orders/delete", (request, response) => {});

    //customers
    server.delete("/customers/delete", (request, response) => {});
<<<<<<< HEAD
=======

>>>>>>> 77ca9128f7a48a8375ecccc867ee5de7ae08130a
  })
  .catch((err) => console.error(err));
const available_port = process.env.PORT || 3000;
//dummy server listening to any available port
server.listen(available_port, () => {
  console.log(`Listing to port: ${available_port}`);
});
