const Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {
    request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
        message.channel.sendEmbed(new Discord.RichEmbed().setImage(info.link)); //
    }
})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "atatürk-resimleri",
  description: "Rastgele atatükr fotoğrafları atar!",
  usage: "atatürk-resimleri"
};