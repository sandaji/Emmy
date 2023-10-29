import connectDb from "./db/Database.js";
import cloudinary from "cloudinary";
import express from "express";
import ErrorHandler from "./utils/ErrorHandler.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import shop from "./controller/shop.js";
import product from "./controller/product.js";
import event from "./controller/event.js";
import coupon from "./controller/coupounCode.js";
import payment from "./controller/payment.js";
import order from "./controller/order.js";
import conversation from "./controller/conversation.js";
import message from "./controller/message.js";
import withdraw from "./controller/withdraw.js";
import userRoute from "./routes/userRoute.js";
import errorHandler from "./middleware/error.js";

const app = express();
dotenv.config();

// Enable CORS
const corsOptions = {
  origin: "http://localhost:5173", 
  credentials: true,
};

app.use(cors(corsOptions));

app.use(errorHandler);
app.use(express.json());
app.use(cookieParser());
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

app.use("/api/user", userRoute);
app.use("/api/conversation", conversation);
app.use("/api/message", message);
app.use("/api/order", order);
app.use("/api/shop", shop);
app.use("/api/product", product);
app.use("/api/event", event);
app.use("/api/coupon", coupon);
app.use("/api/payment", payment);
app.use("/api/withdraw", withdraw);

// it's for ErrorHandling
app.use(ErrorHandler);

// connect db
connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
