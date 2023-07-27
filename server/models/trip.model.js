const mongoose = require("mongoose");

// DOUBLE CHECK VALIDATIONS & Requirements -> tests max length with 10 before switching to 255*
const TripSchema = new mongoose.Schema(
  {
    tripName: {
      type: String,
      required: [true, "Please include a {PATH}!"],
      unique: true,
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
    // TODO: determine if type needs to change
    packingList: {
      type: [String],
      required: [true, "...tbd...  {PATH}!"],
    },
    packingListName: {
      type: String,
      required: [true, "...tbd...  {PATH}!"],
      maxlength: [500, "{PATH} ...tbd... {MAXLENGTH} ...!"],
    },

    // TBD/create a packing list?: {
    //     type: String,
    //     required: [true, "...tbd...  {PATH}!"],
    //     maxlength: [255, "{PATH} ...tbd... {MAXLENGTH} ...!"],
    //   },
  },
  { timestamps: true }
);

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
