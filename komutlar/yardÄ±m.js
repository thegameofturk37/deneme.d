const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» Eğlence Komutları', 'd!eğlence')
.addField('» Yetkili Komutları', 'd!yetkili')
.addField('» Müzik Komutları', 'Şuan Hatalı')
.addField('» Ekstra Komutlar', 'd!ekstra')
.addField('» Nsfw Komutları', 'd!nsfw')
.addField('» Eğlence 2 Komutları', 'Yakında') 
.setFooter('© 2019 Neptune', client.user.avatarURL)
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
}