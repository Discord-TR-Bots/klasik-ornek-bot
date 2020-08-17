const Discord = require('discord.js')
const client = new Discord.Client()
// bukadarını çalanada ne diyim yani xd
client.on('ready', () => {
client.user.setActivity('By DiscordTRBots', { status: "WATCHING"})
console.log('BOT: Aktif')
});
client.on('message, msg => {
if (msg.content.toLowerCase() === 'sa') {
msg.channel.send('Aleyküm selam, hoşgeldin.')
});
client.login('TOKEN')
