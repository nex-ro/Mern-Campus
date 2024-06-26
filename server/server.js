const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    //perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
    app.get('/', (req, res) => {
        res.send('hello world')
      })
});

app.use(require("./routes/record"));