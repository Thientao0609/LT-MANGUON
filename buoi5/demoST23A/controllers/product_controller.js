const Product = require("../models/product");
class ProductController {
  static async index(req, res) {
    const limit = 5;
    let count = await Product.countDocuments({});
    let pages = Math.ceil(count / limit);
    const q = req.query.q;
    let page = req.query.page;
    page = parseInt(page);
    // page = 1, limit=5, skip = 0
    // page = 2, limit=5, skip = 5
    // page = 3, limit=5, skip = 10
    // page = n,  limit =5, skip = 5x(n-1)
    let skip = (page - 1) * limit;
    console.log(pages);
    let products;
    // if (q) {
    //   products = await Product.find({ name: { $regex: ".*" + q + ".*" } });
    // } else {
    // Tìm các sản phẩm có số lượng từ 2-10
    try {
      products = await Product.find({});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    // }
    // res.render("products/index", { products });

    res.json({ message: "Lấy dữ liệu thành công!!", data: products });
  }
  static async new(req, res) {
    res.render("products/new");
  }

  static async create(req, res) {
    try {
      let { name, description } = req.body;
      const product = await Product.create({ name, description });
      res.json({ message: "Tạo dữ liệu thành công!!", data: product });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    let id = req.params.id;
    const product = await Product.deleteOne({ _id: id });
    console.log(product);
    res.json({ message: "Server Xoá thành công!!!!!!" });
  }
}

module.exports = ProductController;
