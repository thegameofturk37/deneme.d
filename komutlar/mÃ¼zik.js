const Discord = require('discord.js');
const loglar = require('../loglar.json')

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

	const eğlence = new  Discord.RichEmbed()
	.setColor()
	.setAuthor(`Neptune`, client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField(`Müzik Komutları`, `**d!çal** = İstediğiniz Müziği Çalar. \n**d!geç** = İstediğiniz Şarkıyı Geçer. \n**d!durdur** = İstediğiniz Şarkıyı Durdurur. \n**d!ses** = Sesi Ayarlar. \n**d!çalan** = Çalan Şarkıyı Gösterir. \n**d!sıra** = Sırayı Gösterir. \n**d!duraklat** = Şarkıyı Duraklatır. \n**d!devam** = Şarkı Devam Eder. \n**d!Şarkı Kuyruğu** = Çalınıcak Şarkıları Gösterir.`)
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)

    return message.channel.sendEmbed(eğlence);

};



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Müzik Komutları.',
  usage: 'müzik'
};