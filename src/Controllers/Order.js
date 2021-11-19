const { Mongoose } = require("mongoose");
const Order = require("../Models/Order");

const OrderController = {
  //======= get all Order ==========
  async all(req, res) {
    const project = { __v: 0 };
    try {
      const result = await Order.find({}, project);
      res.status(200).json({ count: result.length, orders: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: "cant get all Orders", error: error.message });
    }
  },

  //======= store Order ==========
  async store(req, res) {
    const newOrder = new Order(req.body);

    await newOrder.save((err, data) => {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          error: err.message,
        });
      } else {
        res
          .status(200)
          .json({ message: "Order was inserted successfully!", data: data });
      }
    });
  },

  //======= update Order by id ==========
  async update(req, res) {
    const orderId = req.body._id;
    const orderStatus = req.body.status;
    const where = { _id: orderId };
    const updateOrder = { $set: { status: orderStatus } };

    try {
      const result = await Order.updateOne(where, updateOrder);
      res
        .status(200)
        .json({ message: "Order update successfully!", data: result });
    } catch (error) {
      res.status(500).json({
        message: "There was an error on the server.",
        error: error.message,
      });
    }
  },
};

module.exports = OrderController;
