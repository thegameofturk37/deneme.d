const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» PanSehir')
.setTimestamp()
.addField('» Websitemiz', 'Siten varsa koy')
.setFooter('© 2019 Neptune BOT', client.user.avatarURL)
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
  name: 'website',
  description: 'Websiteyi Atar.',
  usage: 'website'
};
