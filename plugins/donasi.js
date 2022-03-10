let handler = async m => m.reply(`
┏━━⬣ 𝗗𝗢𝗡𝗔𝗦𝗜
┃
┃⬡ TRI : 089625556161
┃⬡ GOPAY : 6289625556161
┃⬡ DANA : 6289625556161
┃⬡ SAWERIA : xxxxxxxx
┗⬣
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

