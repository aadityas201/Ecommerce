const User = require("./../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    //Encrypt the Password using Advanced Encryption Standard
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    //save the New User Instance
    const savedUser = await newUser.save();
    //send the response with Created Status Code 201
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  try {
    console.log(req.body.username);
    //find the user with the username using findOne
    const user = await User.findOne({ username: req.body.username });
    //return response if no user exists with that username
    !user && res.status(401).json("Wrong credentials!");
    //if user exists decrypt the password stored in the database
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    //convert the decrypted password to string
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    //compare both the passwords i.e stored one and the one obtained from req.body
    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");
    //if they passwords are same, create a jwt token with comprising of id and isAdmin
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    console.log(accessToken);
    //store the  password in one field and remaining contents of user._doc in others
    //mongoDb Stores our info in _doc
    const { password, ...others } = user._doc;
    //send the info and the access token
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};
