const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7DR12LxL#L8ggt4p0ITLuQFCaPvfso9VaVURJwYX_dYRREqCFkIU",
MONGODB: process.env.MONGODB || "",
};
