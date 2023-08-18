const Vehicle = require('../models/Vehicle');

// get vehicle
exports.getVehicleById = async (req, res, next, id) => {
  try {
    let vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      return res.status(404).json({
        err: 'vehicle not found',
      });
    }

    req.vehicle = vehicle;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

// get vehicle
exports.getVehicle = (req, res) => {
  return res.json(req.vehicle);
};

// create vehicle
exports.addVehicle = async (req, res) => {
  try {
    const newVehicle = new Vehicle(req.body);
    await newVehicle.save();

    return res.status(201).json(newVehicle);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

//  get all vehicles
exports.getAllVehicle = async (req, res) => {
  try {
    let vehicles = [];

    console.log(req.query.type);

    if (req.query.type) {
      vehicles =
        req.query.type === 'all'
          ? await Vehicle.find()
          : await Vehicle.find({ vehicleType: req.query.type });
    } else {
      vehicles = await Vehicle.find();
    }

    // console.log(vehicles);

    if (!vehicles) return res.status(404).json('No vehicles found!');

    return res.status(200).json(vehicles);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// update a vehicle
exports.updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.vehicle._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    return res.status(200).json(updatedVehicle);
  } catch (err) {
    return res.status(500).json({ err });
  }
};

// delete a vehicle
exports.deleteVehicle = async (req, res) => {
  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(req.vehicle._id);

    return res.status(200).json(deletedVehicle);
  } catch (err) {
    return res.status(500).json(err);
  }
};
