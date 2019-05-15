const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as benı muslumanmı sandın aslında ben bıle bılmıyorum');
  }
});

client.on('message', msg => {
  if (msg.content === 'shiro') {
    msg.reply('shiro kerdesim olur severim onu :D');
  }
});

client.on('message', msg => {
  if (msg.content === 'selam') {
    msg.reply('selam bayby ');
  }
});

client.on('message', msg => {
  if (msg.content === 'kız') {
    msg.reply('gecen bi kız gordum bana sapık dedi .D');
  }
});

client.on('message', msg => {
  if (msg.content === 'sapık') {
    msg.reply('biri galiba sapık dedi o ben olmayım ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'neko') {
    msg.reply('i love you neko  :D');
  }
});

client.on('message', msg => {
  if (msg.content === 'nasılsın') {
    msg.reply('nasılsın sen:D');
  }
});

client.login(process.env.BOT_TOKEN);
