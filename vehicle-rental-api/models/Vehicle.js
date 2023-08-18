const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    rating: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    vehicleType: {
      type: String,
      required: true,
    },
    gasType: {
      type: String,
    },
    seats: {
      type: String,
    },
    carType: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Vehicle', VehicleSchema);
