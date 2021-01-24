const Discord = require('discord.js');
const loglar = require('../loglar.json')

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

	const eğlence = new  Discord.RichEmbed()
	.setColor()
	.setAuthor(`Neptune`, client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField(`Ekstra Komutları`, `**d!bilgi** = Bot Hakkında Bilgi Verir. \n**d!aşkölçer** = Herhangi Biriyle Aşkınızı Ölçer. \n**d!sherlock** = Yapımcıya Ulaşırsınız. \n**d!ailemiz** = Botun Olduğu Sunucuları Gösterir. \n**d!ateş-et** = Ateş Edersiniz. \n**d!hapishane** = Profilinize Hapishane Efekti Yapar . \n**d!kapaklaflar** = Kapak Laflar Söyler. \n**d!kralol** = Kral Olursunuz. \n**d!kullanıcıbilgim** = Kullanıcı Bilginizi Gösterir. \n**d!reboot** = Bot Yeniden Başlar. \n**d!sarıl** = İstediğiniz Kişiye Sarılırsınız.`)
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
  name: 'ekstra',
  description: 'Ekstra Komutları.',
  usage: 'ekstra'
};