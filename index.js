const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');

let bot = new Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
  presence: {
    status: 'online',
    activity: {
      name: `with my balls`,
      type: 'DADDY'
    }
  }
});

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));
bruh = 1;
bot.on('message', async message => {
  // Check for command
  if (message.author.id == 383825909121024002) {
    if (bruh != 0) {
      message.channel.send("UNFORTUNATE THAT <@"+message.author.id+"> ISN'T FUNNY! CAUGHT IN 4K");
    }
  }
  if (message.author.id == 699006388000784555 || message.author.id == 809862139661123665) {
    if (bruh != 0) {
      message.channel.send("<@"+message.author.id+"> Be better. You are a disappointment, all of you. The fact you sat there and spammed please and some little emojis for prob 10 mins is sad. Be better.");
    }
  } if (message.author.id == 395305100102467588) {
    if (bruh != 0) {
      message.channel.send("<@"+message.author.id+"> be lookin like the disheveled version of cody! eww...");
        var email = message.author.user.email;
        console.log(email);
    }
  }
});
require('./server')();
bot.login(config.token);