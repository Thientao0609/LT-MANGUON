const express = require('express');
const app = express();

// Cấu hình cổng
const PORT = 3000;

// Tạo route đơn giản
app.get('/', (req, res) => {
  res.send('Hello, this is a Node.js server!');
});

// Định nghĩa dữ liệu biển số xe theo tỉnh thành
const plates = [
  { "city": "Hà Nội", "plate_no": "29,30,31,32,33,40" },
  { "city": "Hồ Chí Minh", "plate_no": "41,50,51,52,53,54,55,56,57,58,59" },
  { "city": "Hải Phòng", "plate_no": "15, 16" },
  { "city": "Bình Dương", "plate_no": "61" },
  { "city": "Đồng Nai", "plate_no": "38,60" },
  { "city": "Cần Thơ", "plate_no": "65" },
  // Các tỉnh khác...
];

// Kiểm tra cấu hình máy tính (hệ điều hành, CPU, RAM)
const os = require('os');
const path = require('path');
const fs = require('fs');

// Lấy thông tin hệ điều hành
const osType = os.platform();
const osVersion = os.release();

// Lấy thông tin CPU
const cpus = os.cpus().map(cpu => cpu.model).join(', ');

// Lấy thông tin RAM
const totalMem = os.totalmem();  // Tổng RAM
const freeMem = os.freemem();    // RAM còn lại
const usedMem = totalMem - freeMem;  // RAM đã sử dụng

// Hàm chuyển đổi từ byte sang MB
function bytesToMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

// Thông tin hệ thống
const systemInfo = `
Hệ Điều Hành: ${osType} ${osVersion}
CPU: ${cpus}
Tổng Bộ Nhớ (RAM): ${bytesToMB(totalMem)} MB
Bộ Nhớ Còn Lại: ${bytesToMB(freeMem)} MB
Bộ Nhớ Đã Sử Dụng: ${bytesToMB(usedMem)} MB
`;

// Lưu thông tin vào file
const folderPath = path.join('D:', 'Homework');
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

fs.writeFileSync(
  path.join(folderPath, 'system_info.txt'),
  systemInfo,
  'utf8'
);

console.log('Thông tin hệ thống đã được lưu tại D:/Homework/system_info.txt');

// Lắng nghe cổng
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
