//DOUBLE CHECK App Route NAMES & FOLDER/FILE NAMES IN Const

const tripController = require("../controllers/trip.controller");

// below is added first to test along with routes.js
const root = require("./root");

module.exports = (app) => {
  //default test server check
  app.get("/", root);

  //create - post
  app.post("/api/trips", tripController.postCreateTrip);

  //get all - get
  app.get("/api/trips", tripController.getAllTrips);

  //get one - get w/ id
  app.get("/api/trips/:id", tripController.getOneTrip);

  //update - put w/ id
  app.put("/api/trips/:id", tripController.putUpdateTrip);

  //delete - delete w/ id
  app.delete("/api/trips/:id", tripController.deleteTrip);
};
