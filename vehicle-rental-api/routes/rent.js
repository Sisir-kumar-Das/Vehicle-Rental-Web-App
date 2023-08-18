const router = require('express').Router();
const { isSignedIn } = require('../controllers/auth');
const { rentVehicle, getRents } = require('../controllers/rent');
const { getUserById } = require('../controllers/user');
const { getVehicleById } = require('../controllers/vehicle');

router.param('userId', getUserById);
router.param('vehicleId', getVehicleById);

// rent a vehicle
router.put('/:userId/:vehicleId', isSignedIn, rentVehicle);

router.get('/:userId', getRents);

module.exports = router;
