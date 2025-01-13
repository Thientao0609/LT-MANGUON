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
});