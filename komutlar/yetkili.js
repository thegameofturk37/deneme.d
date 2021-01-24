const Discord = require('discord.js');
const loglar = require('../loglar.json')

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

	const eğlence = new  Discord.RichEmbed()
	.setColor()
	.setAuthor(`Neptune`, client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField(`Yetkili Komutları`, `**d!ban** = İstediğiniz Kişiyi Banlarsınız. \n**d!kick** = İstediğiniz Kişiyi Atar. \n**d!mute** = İstediğiniz Kişiyi Mutelersiniz. \n**d!unmute** = Mute Kaldırır. \n**d!reklamengel aç** = Reklam Koruması Açar. \n**d!küfürengel aç** = Küfür Koruması Açar. \n**d!otorol-ayarla** = Otorol Verilir. \n**d!sayaç-ayarla** = Sayaç Ayarlar. \n**d!giriş-çıkış-ayarla** = Resimli Giriş Çıkış Ayarlar. \n**d!özelduyuru** = Herhangi Bir Kullanıcıya Duyuru Yapar. \n**d!oylama** = Oylama Yapar.`)
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
  name: 'yetkili',
  description: 'Yetkili Komutları.',
  usage: 'yetkili'
};