const Rent = require('../models/Rent');

//rent a vehicle
exports.rentVehicle = async (req, res) => {
  try {
    // console.log('inside rent: ', req.profile._id);
    const from = req.body.from;
    const to = req.body.to;
    console.log(new Date(from), new Date(to));
    const rentedVehicle = new Rent({
      ...req.body,
      rentedBy: req.profile._id,
      vehicle: req.vehicle._id,
    });

    await rentedVehicle.save();

    return res.status(200).json(rentedVehicle);
  } catch (err) {
    return res.status(500).json({ err });
  }
};

//get rents of a user
exports.getRents = async (req, res) => {
  try {
    const rents = await Rent.find({ rentedBy: req.profile._id }).populate(
      'vehicle'
    );

    return res.status(200).json(rents);
  } catch (err) {
    return res.status(500).json({ err });
  }
};
