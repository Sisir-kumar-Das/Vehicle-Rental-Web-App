const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: 'Please provide name, email and password!',
    });
  }

  const user = await User.findOne({ email });

  if (user)
    return res.status(403).json({
      error: 'User already exists',
    });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    const { password, ...others } = newUser._doc;

    return res.status(200).json({
      user: {
        _id: others._id,
        name: others.name,
        email: others.email,
        role: others.role,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password: clientPassword } = req.body;

  if (!email || !clientPassword) {
    return res.status(400).json({
      error: 'Please provide email and password!',
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        error: 'User not registered!',
      });
    }

    const validPassword = await bcrypt.compare(clientPassword, user.password);
    if (!validPassword) {
      return res.status(403).json({
        error: 'Invalid credentials!',
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    const { password, ...others } = user._doc;

    return res.status(200).json({
      user: {
        _id: others._id,
        name: others.name,
        email: others.email,
        role: others.role,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: err.message,
    });
  }
};

exports.signOut = (req, res) => {
  req.profile = undefined;
  req.vehicle = undefined;
  return res.status('200').json({
    message: 'signed out',
  });
};

exports.isSignedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // console.log('Token: ', token);

    if (!token) {
      return res.status(400).json({
        error: 'No token found!',
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          error: 'Token not valid!',
        });
      }

      // console.log('User from token', user);

      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({
      error: 'Unauthorized! No token found.',
    });
  }
};

exports.isAuthorized = (req, res, next) => {
  // console.log('Signed in user: ', req.profile._id.toString());
  // console.log('Token user: ', req.user._id.toString());
  const authorized =
    req.profile &&
    req.user &&
    req.profile._id.toString() === req.user._id.toString();
  if (!authorized) {
    return res.status(403).json({
      error: 'You are not authorized',
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 'admin') {
    next();
  } else {
    return res.status(403).json({
      error: 'You are not authorized',
    });
  }
};
