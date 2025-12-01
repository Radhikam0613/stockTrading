const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const authRoute = require('./routes/AuthRoute');

const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const allowedOrigins = [
  "https://stockTrading-landing.onrender.com",
  "https://stockTrading-dashboard.onrender.com",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:4000"
];

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/auth",authRoute);

app.get('/allHoldings', async(req,res) => {
      let allHoldings = await HoldingsModel.find({});
      res.json(allHoldings);
})

app.get('/allPositions', async(req,res) => {
      let allPositions = await PositionsModel.find({});
      res.json(allPositions);
})

app.post('/newOrder', async(req,res) => {
      try {
            const { name, qty, price, mode } = req.body;
            
            let newOrder = new OrdersModel({
                  name,
                  qty,
                  price,
                  mode,
            });
            
            await newOrder.save();
            if (mode === "BUY") {
                  let existing = await HoldingsModel.findOne({ name });
                  
                  if (existing) {// Update qty and average
                        const totalQty = existing.qty + qty;
                        const newAvg = (existing.qty * existing.avg + qty * price) / totalQty;
                        
                        existing.qty = totalQty;
                        existing.avg = newAvg;
                        
                        await existing.save();
                  } else { // Create new holding
                        const newHold = new HoldingsModel({
                              name,
                              qty,
                              avg: price,
                              price: price,   // you can replace this with live LTP later
                              net: "0%",
                              day: "0%",
                        });
                        await newHold.save();
                  } 
                  
            }
            
            res.send("Orders saved")
      }catch (err) {
            console.error("err");
            res.status(500).json({ error: err.message  });
      }
});


app.listen(3002, () => {
      console.log("App started");
      mongoose.connect(uri)
      .then(() => console.log("MongoDB is  connected successfully"))
      .catch((err) => console.error(err));
      console.log("DB connected");
});
