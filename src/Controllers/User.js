const User = require("../Models/User");

const UserController = {
  //======= get all user ==========
  async all(req, res) {
    const project = { __v: 0 };
    try {
      const result = await User.find({}, project);
      res.status(200).json({ count: result.length, users: result });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "there was an error on the server",
          error: error.message,
        });
    }
  },
  //======= get all user ==========
  async getAdmin(req, res) {
    const email = req.params.email;
    const query = { email: email };
    try {
      const result = await User.find(query);
      const user = result[0];
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.status(200).json({ admin: isAdmin });
    } catch (error) {
      res.status(500).json({
        message: "there was an error on the server",
        error: error.message,
      });
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

  //======= update or create user ==========
  async updateRole(req, res) {
    const user = req.body;
    const filter = { _id: user._id };
    const updateDoc = { $set: { role: user.role } };
    try {
      const result = await User.updateOne(filter, updateDoc);
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
