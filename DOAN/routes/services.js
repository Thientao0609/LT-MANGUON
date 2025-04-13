const express = require("express");
const Service = require("../models/Service");

const router = express.Router();

// Lấy danh sách dịch vụ
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Lỗi server" });
  }
});

// Thêm dịch vụ mới
router.post("/", async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const newService = new Service({ title, description, price });
    await newService.save();
    res.json(newService);
  } catch (err) {
    res.status(500).json({ error: "Lỗi server" });
  }
});

module.exports = router;
