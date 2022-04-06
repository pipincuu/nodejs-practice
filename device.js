const os = require("os");
const fs = require("fs");

function myDevice(data){
    fs.writeFileSync('./device.json', JSON.stringify(data));
}

myDevice({
    deviceName: "LAPTOP-HP-1V6RBSM1",
    deviceArch: os.arch(),
    year: "2019",
    series: "Pavilion",
    deviceUser: os.userInfo(),
    deviceMemory: os.totalmem(),
    systemType: "64bit Operating System"
});