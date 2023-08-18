const User = require('../models/User');

exports.getUserById = async (req, res, next, id) => {
  try {
    // console.log('inside get user: ', id);
    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    // console.log('after getting user: ', user);

    req.profile = user;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getUser = (req, res) => {
  req.profile.password = undefined;
  return res.json(req.profile);
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) return res.status(404).json('No user found!');
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateUser = async (req, res) => {
  if (req.body.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.profile._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    const { password, ...others } = updatedUser._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json({ err });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.profile._id);

    return res.status(200).json(deletedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};
