const User = require("../Models/User");

const UserController = {
  //======= get all user ==========
  async all(req, res) {
    const project = { __v: 0 };
    try {
      const result = await User.find({}, project).populate("orders");
      res.status(200).json({ count: result.length, users: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: "cant get all users", error: error.message });
    }
  },

  //======= store user ==========
  async store(req, res) {
    const newUser = new User(req.body);

    try {
      const result = await newUser.save();
      res
        .status(200)
        .json({ message: "user was inserted successfully!", user: result });
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error: error.message,
      });
    }
  },

  //======= update or create user ==========
  async update(req, res) {
    const user = req.body;
    const filter = { email: user.email };
    const options = { upsert: true };
    const updateDoc = { $set: user };
    try {
      const result = await User.updateOne(filter, updateDoc, options);
      res
        .status(200)
        .json({ message: "user update successfully!", data: result });
    } catch (error) {
      res.status(500).json({
        message: "there was a server side error",
        error: error.message,
      });
    }
  },
};

module.exports = UserController;
