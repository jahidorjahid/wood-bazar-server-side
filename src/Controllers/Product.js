const Product = require("../Models/Product");

const productController = {
  //======= get all product ==========
  async all(req, res) {
    const project = { __v: 0 };
    try {
      const result = await Product.find({}, project);
      res.status(200).json({ message: "product available", data: result });
    } catch (error) {
      res
        .status(200)
        .json({ message: "cant get all products", error: error.message });
    }
  },

  //======= get product by id ==========
  async single(req, res) {
    const productId = req.params.id;
    console.log("product id is ", productId);
    const query = { _id: productId };
    const project = { __v: 0 };
    try {
      const result = await Product.findOne(query, project);
      res.status(200).json({ message: "product available", data: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: "No Match Product Id", error: error.message });
    }
  },

  //======= store product ==========
  async store(req, res) {
    const newProduct = new Product(req.body);

    await newProduct.save((err, data) => {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          error: err.message,
        });
      } else {
        res
          .status(200)
          .json({ message: "Product was inserted successfully!", data: data });
      }
    });
  },

  //======= update product by id ==========
  async update(req, res) {
    const productId = req.params.id;
    const where = { _id: productId };
    const newProduct = { $set: req.body };
    try {
      const result = await Product.updateOne(where, newProduct);
      res
        .status(200)
        .json({ message: "Product update successfully!", data: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: "No Match Product Id", error: error.message });
    }
  },

  //======= delete product by id ==========
  async delete(req, res) {
    const productId = req.params.id;
    const query = { _id: productId };
    try {
      const result = await Product.deleteOne(query);
      res
        .status(200)
        .json({ message: "product deleted successfully!", data: result });
    } catch (error) {
      res.status(500).json({
        message: "No Match Product Id - Failed to delete",
        error: error.message,
      });
    }
  },
};

module.exports = productController;
