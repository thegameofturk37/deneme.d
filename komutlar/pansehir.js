const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Sherlock')
.setTimestamp()
.addField('» Sherlock 1. ulaşma', '<@540640047129427995>')
.addField('» Sherlock 2. ulaşma', 'xxkaranlkx (instagram)')
.addField('» Sherlock 3. ulaşma', 'https://discord.gg/vwWakG (discord)')
.addField('» Sherlock 4. ulaşma', '(twitter hesabı oluşturduğumda koyucam)')
.setFooter('© 2019 Sherlock', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'Sherlock',
  description: 'Yapımcıya Ulaşma.',
  usage: 'Sherlock'
};