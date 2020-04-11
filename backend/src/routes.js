const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

routes.post("/Sessions", SessionController.store);

routes.get("/Dashboard", DashboardController.show);

routes.get("/Spots", SpotController.index);
routes.post("/Spots", upload.single("thumbnail"), SpotController.store);

routes.get("/Bookings", BookingController.index);
routes.post("/spots/:spot_id/Bookings", BookingController.store);

module.exports = routes;
