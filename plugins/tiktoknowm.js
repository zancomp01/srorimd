const {tiktokdownload} = require('tiktok-scraper-without-watermark')

let handler = async (m, { conn }) => {
  m.reply(wait)
  api = await tiktokdownload(m.text)
  conn.sendFile(m.chat, api.nowm, '.mp4', wm, m)
}

handler.command = /^(tiktoknowm)$/i
handler.help = ['tiktokwm']
handler.tags = ['downloader']

module.exports = handler
