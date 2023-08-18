const router = require('express').Router();
const { isSignedIn, isAdmin, isAuthorized } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');
const {
  getVehicleById,
  getAllVehicle,
  getVehicle,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicle');

router.param('vehicleId', getVehicleById);
router.param('userId', getUserById);

// get all vehicles
router.get('/', getAllVehicle);

// get a vehicle
router.get('/:vehicleId', getVehicle);

// create a vehicle
router.post('/:userId', isSignedIn, isAuthorized, isAdmin, addVehicle);

// update a vehicle
router.put(
  '/:vehicleId/:userId',
  isSignedIn,
  isAuthorized,
  isAdmin,
  updateVehicle
);

// delete a vehicle
router.delete(
  '/:vehicleId/:userId',
  isSignedIn,
  isAuthorized,
  isAdmin,
  deleteVehicle
);

module.exports = router;
