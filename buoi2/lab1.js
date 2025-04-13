HEAD
const express = require('express');
const app = express();

// Route gốc '/'
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          /* Reset một số kiểu mặc định của trình duyệt */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* Đặt kiểu chung cho toàn bộ trang */
          body {
            font-family: 'Arial', sans-serif;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
          }

          /* Container chính */
          form {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
            position: relative;
          }

          /* Avatar người dùng */
          .avatar {
            width: 120px;
            height: 120px;
            background-color: #4CAF50;
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .avatar img {
            width: 70%;
            height: 70%;
            object-fit: contain;
          }

          /* Tiêu đề */
          h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
          }

          /* Định dạng cho các phần tử label và input */
          label {
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
            text-align: left;
          }

          input[type="text"], input[type="password"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }

          input[type="text"]:focus, input[type="password"]:focus {
            border-color: #4CAF50;
            outline: none;
          }

          /* Nút đăng nhập */
          button[type="submit"] {
            width: 100%;
            padding: 12px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
          }

          button[type="submit"]:hover {
            background-color: #45a049;
          }

          /* Nút hủy */
          button[type="reset"] {
            width: 100%;
            padding: 12px;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px;
          }
button[type="reset"]:hover {
    background-color: #e53935;
  }

  /* Liên kết "Forgot password?" */
  a {
    color: #4CAF50;
    text-align: right;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin-top: 10px;
  }

  a:hover {
    text-decoration: underline;
  }

  .forgot-password {
    position: absolute;
    bottom: 10px;
    right: 30px;
  }

  /* Style cho checkbox */
  label input[type="checkbox"] {
    margin-right: 10px;
  }

  /* Căn chỉnh checkbox */
  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
</style>
</head>
<body>
<form method="POST" action="/login">
  <div class="avatar">
    <img src="https://via.placeholder.com/100" alt="Avatar">
  </div>
  <h1>Login Form</h1>
  <p>
    <label for="username">Username</label>
    <input type="text" name="username" id="username" placeholder="admin@example.com" required>
  </p>
  <p>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" placeholder="********" required>
  </p>
  <p>
    <label><input type="checkbox" name="remember"> Remember me</label>
  </p>
  <button type="submit">Login</button>
  <button type="reset">Cancel</button>
  <a class="forgot-password" href="#">Forgot password?</a>
</form>
</body>
</html>
`);
});

// Lắng nghe cổng 3000
app.listen(3000, () => {
console.log(`Example app listening on port 3000`);
/*
BT1: Kiểm tra cấu hình máy tính của bạn (hệ điều hành, cấu hình CPU, RAM, USED RAM,..) và thực hiện:
    1. In ra nó trình duyệt.
    2. Ghi thông tin đó ra một file và lưu trong D:\Homework,..
*/

const path = require("node:path");
const os = require("node:os");
const fs = require("node:fs");

// Lấy thông tin hệ điều hành
let osType = os.platform();
let osVersion = os.release();

// Lấy thông tin CPU
let cpus = os.cpus();
let cpusInfo = cpus.map(cpu => cpu.model).join(', ');

// Lấy thông tin RAM
let ram = os.totalmem();  // Tổng RAM
let freeRam = os.freemem(); // rAM còn lại
let usedRam = ram - freeRam; // dã dùng bao nhiêu

// Chuyển đổi giá trị RAM từ byte -> MB
function bytesToMB(bytes) {
    return (bytes / 1024 / 1024).toFixed(2);
};

// thông tin hệ thống
let systemInfo = `
    Hệ Điều Hành: ${osType} ${osVersion}
    CPU: ${cpusInfo}
    Tổng Bộ Nhớ (RAM): ${bytesToMB(ram)} MB,
    Bộ Nhớ Còn Lại: ${bytesToMB(freeRam)} MB,
    Bộ Nhớ Đã Sử Dụng: ${bytesToMB(usedRam)} MB
`;

console.log(systemInfo);

// Lưu thông tin
const folderPath = path.join("D:", "Homework");
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

fs.writeFile(path.join(folderPath, "system_info.txt"), systemInfo, "utf8", (err) => {
    if (err) throw err;
    console.log("Đã lưu vào D:/Homework/system_info.txt");
     ea58aaf6c51aee65dc8b7bc3404d32d050f70e19
});