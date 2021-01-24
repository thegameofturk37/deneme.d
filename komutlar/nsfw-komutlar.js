const Discord = require('discord.js');
const loglar = require('../loglar.json')

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

	const eğlence = new  Discord.RichEmbed()
	.setColor()
	.setAuthor(`Neptune`, client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField(`Nsfw Komutları`, `**d!hd** = +18 foto atar. \n**d!4k** = +18 4k foto atar. \n**d!nsfw-gif** = +18 Gifler Atar. \n**d!sherlock** = Yapımcıya Ulaşırsınız (Sapık Değilim Herkes Görsün Diye Koydum).`)
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
  name: 'nsfw',
  description: 'Nsfw Komutları.',
  usage: 'nsfw'
};