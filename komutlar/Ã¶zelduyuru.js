const Discord = require('discord.js');
exports.run = function(client, message, args) {

    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send(':x: **DM Atacağın Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **DM Atcağım Yazıyı Unuttun!**');
    message.delete();
    const dmat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Merhaba Sana Birisinden DM Var!')
    .addField('DM Atan :', `➽ <@${message.author.id}>`)
    .addField('DM İse :', `➽ ${dm}`)
    .setFooter('DM | XiR')
    dmkisi.sendEmbed(dmat);
    const dmtamam = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('İşlem Tamamlandı :white_check_mark:')
    .setFooter('DM | XiR')
    message.channel.sendEmbed(dmtamam);

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'özelduyuru',
  description: 'belirlediğiniz kişiye mesaj gönderirsiniz.',
  usage: 'özelduyuru'
};