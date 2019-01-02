const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530127880928100383")
setInterval(function() {
channel.send(`بسم الله الرحمن الرحيم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
