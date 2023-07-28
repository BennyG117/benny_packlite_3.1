
//DOUBLE CHECK Module.exports NAMES & FOLDER/FILE NAMES IN Const
const Trip = require("../models/trip.model");

module.exports = {
  //create one
  postCreateTrip: (req, res) => {
    Trip.create(req.body)
      .then((newTrip) => {
        res.json(newTrip);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //get all
  getAllTrips: (req, res) => {
    Trip.find()
      .then((trips) => {
        res.json(trips);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //get one with id
  getOneTrip: (req, res) => {
    Trip.findOne({ _id: req.params.id })
      .then((oneTrip) => {
        res.json(oneTrip);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //update one with id
  putUpdateTrip: (req, res) => {
    Trip.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatingTrip) => {
        res.json(updatingTrip);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //delete one with id
  deleteTrip: (req, res) => {
    Trip.deleteOne({ _id: req.params.id })
      .then((deleteTrip) => {
        res.json(deleteTrip);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

};
