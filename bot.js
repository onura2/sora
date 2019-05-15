const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});
client.on('message', msg => {
  if (msg.content === 'kızlar') {
    msg.reply('kızlarmı hihi');
  }

});
client.on('message', msg => {
  if (msg.content === 'sora') {
    msg.reply('a banamı seslendin hahahaha');
  }

});
client.on('message', msg => {
  if (msg.content === 'shiro') {
    msg.reply('shiro kerdesimdir severim onu :kissing_heart: ');
  }

});
client.on('message', msg => {
  if (msg.content === 'neko') {
    msg.reply('a love you neko :kissing_heart: ');
  }

});
client.on('message', msg => {
  if (msg.content === 'op') {
    msg.reply('zekle much ');
  }

});
client.on('message', msg => {
  if (msg.content === 'ayıp') {
    msg.reply('ayıpmı daha fazlasınıda yapabılırım :kissing_smiling_eyes: ');
  }
  client.on('message', msg => {
    if (msg.content === 'sapık') {
      msg.reply(' aman saka yaptım :joy: ');
    }

  });

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as asilda musluman dıgılım :relieved: ');
  }

});
client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pingin' + client.ping + 'ms');
  }

    if (message.content === 'selam') {
    message.reply('selam bayby :smirk: ') ;
  }

  if (message.content === prefix + 'avatar') {
	message.channel.send(message.author.avatarURL);
  }

  if (message.content === prefix + 'reboot') {

	  if (message.author.id === "") {
		  message.channel.send('[BOT]Yenden başlatılıyor...').then(msg => {
			  console.log('yeniden başlatılıyor')
			  process.exit(0);
		  });
	  } else
		  message.channel.send('Maalesef bu komutu kullanamazsın. Benim yapımcım değilsin!')
  }


});

client.login(process.env.BOT_TOKEN);
