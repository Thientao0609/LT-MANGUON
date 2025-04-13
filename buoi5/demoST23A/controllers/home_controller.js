const User = require("../models/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

class HomeController {
  static index(req, res) {
    // let q = req.query.q;
    // let id = req.params.id;
    let params = req.body;
    // console.log(q);
    // console.log(id);
    console.log(params);

    res.render("index");
  }

  static login(req, res) {
    console.log("login");
    res.render("login");
  }

  static resgiter(req, res) {
    res.render("resgiter");
  }
  static async newresgiter(req, res) {
    let { email, password } = req.body;
    password = bcrypt.hashSync(password, salt);
    let user = await User.create({ email, password });
    res.render("resgiter");
  }

  static async createlogin(req, res) {
    console.log(req.body);
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      let check = bcrypt.compareSync(password, user.password);
      if (check) {
        req.session.user = user;
        res.redirect("/");
      } else {
        res.render("login");
      }
    } else {
      res.render("login");
    }
  }
}

module.exports = HomeController;
