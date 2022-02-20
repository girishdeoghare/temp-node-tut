const os = require('os') 

// info about users 

const user = os.userInfo()
console.log(user);

// method for system uptime in seconds 
console.log(os.uptime())