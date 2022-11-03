let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
bear = "9b95802c6f20";
  if (!text) return conn.reply(m.chat, `Gunakan format: ${usedPrefix}${command} Colin Changed`, m)

  await conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/5a46383499a405792185b.jpg', 'Searching...', wm2, 'Owner', '.owner', m)
    let res = await fetch(`https://zenzapis.xyz/downloader/musically?apikey=${bear}&url=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Search Tiktok NoWM 🔍`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/f13cee700cf48fdda942d.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    conn.sendButtonVid(m.chat, json.result.nowm, `Nih Kak @${m.sender.split`@`[0]}`, wm, 'Audio', `!tiktokmp3 ${text}`, m, {
    quoted: ftrol, contextInfo: { forwardingScore: 99999, isForwarded: true,
         externalAdReply: { 
             title: global.wm,
             body: 'Apa Benar Ini Yang Ada Cari?',
             description: 'Apa Benar Ini Yang Ada Cari?', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(), 
          mediaUrl: `https://youtu.be/PPLlC5NWAuE` 
         } 
      } 
   })
}
handler.help = ['tiktok <keyword>'] 
 handler.limit = true 
 handler.tags = ['downloader'] 
 handler.command = /^(tiktok)$/i 
  
 module.exports = handler
