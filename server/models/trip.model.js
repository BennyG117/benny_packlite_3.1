const mongoose = require("mongoose");

// DOUBLE CHECK VALIDATIONS & Requirements -> tests max length with 10 before switching to 255*
const TripSchema = new mongoose.Schema(
  {
    tripName: {
      type: String,
      required: [true, "Please include a {PATH}!"],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters!"],
    },
    startDate: {
      type: Date,
      required: [true, "...tbd...  {PATH}!"],
    },

    returnDate: {
      type: Date,
      required: [true, "...tbd...  {PATH}!"],
    },

    destination: {
      type: String,
      required: [true, "...tbd...  {PATH}!"],
      maxlength: [255, "{PATH} ...tbd... {MAXLENGTH} ...!"],
    },

    packingList: {
      type: String,
      required: [true, "...tbd...  {PATH}!"],
    },

    // TBD: {
    //     type: String,
    //     required: [true, "...tbd...  {PATH}!"],
    //     maxlength: [255, "{PATH} ...tbd... {MAXLENGTH} ...!"],
    //   },
  },
  { timestamps: true }
);

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
