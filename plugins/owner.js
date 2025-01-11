const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*🔥 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴀᴄᴅ-ᴍᴅ*
🔥 *ɴᴜᴍʙᴇʀ* -: 50948065506
🔥 *ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VawLYDoCHDynDTzVj72L

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴄᴅ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://img101.pixhost.to/images/496/554321573_vanzzhoat.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
