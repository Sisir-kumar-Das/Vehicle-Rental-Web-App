const {
  getUserById,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/user');

const router = require('express').Router();

router.param('userId', getUserById);

// get all users
router.get('/', getAllUsers);

// get a user
router.get('/:userId', getUser);

// update a user
router.put('/:userId', updateUser);

// delete a user
router.delete('/:userId', deleteUser);

module.exports = router;
