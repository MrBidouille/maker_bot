const Discord = require('discord.js');
const bot = new Discord.client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

bot.login(process.env.TOKEN);

