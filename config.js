const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SA1UEapL#OJbym7y_h7YbmMyeo1zmT99sxneXfCmzbT7dqYgk_5A",  //මෙතනට ඔයාගෙ සෙශන් කෝඩ් එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://img101.pixhost.to/images/496/554321573_vanzzhoat.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am AlIVE NOW....! 🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "50948065506",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

