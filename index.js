const Discord = require('discord.js');
const bot = new Discord.client();

bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

bot.login(process.env.TOKEN);

