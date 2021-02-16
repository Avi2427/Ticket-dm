//====[『CR』亗〆Ť I G E R〆亗 ]====\\
/*
All Copyright Go To [『CR』亗〆Ť I G E R〆亗#0245 ]
Support Server : discord.gg/QA9JjVGq9V
*/
//====[『CR』亗〆Ť I G E R〆亗 ]====\\

const express = require('express');
const app = express();
require('http')
  .createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
  })
  .listen(process.env.PORT, '0.0.0.0');
app.listen(() => console.log(`Starting...`));
app.use('/ping', (req, res) => {
  res.send(new Date());
});//『CR』亗〆Ť I G E R〆亗#0245

//====[『CR』亗〆Ť I G E R〆亗 ]====\\

const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, Prefix, Status, Roomid, Server, D_ROLE } = require('./config');
client.login(TOKEN).catch(err => console.error(`[ Discord API ] Wrong Token`));
//『CR』亗〆Ť I G E R〆亗#0245

//====[『CR』亗〆Ť I G E R〆亗 ]====\\

client.on('ready', () => {
client.user.setActivity(Status);
console.log(`
████████╗██╗░██████╗░███████╗██████╗░
╚══██╔══╝██║██╔════╝░██╔════╝██╔══██╗
░░░██║░░░██║██║░░██╗░█████╗░░██████╔╝
░░░██║░░░██║██║░░╚██╗██╔══╝░░██╔══██╗
░░░██║░░░██║╚██████╔╝███████╗██║░░██║
░░░╚═╝░░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝`);
console.log(`DM Modmail+ By ŤIGER Copyright 2021©️`);
console.log(`Login * [ " ${client.user.username} " ] servers! [ " ${client.guilds.cache.size} " ]`);
console.log(`Login * [ " ${client.user.username} " ] Users! [ " ${client.users.cache.size} " ]`);
console.log(`Login * [ " ${client.user.username} " ] channels! [ " ${client.channels.cache.size} " ]`);
client.guilds.cache.forEach(guild => {
if (Server.includes (guild.id)) return;
else guild.leave();
});
});//『CR』亗〆Ť I G E R〆亗#0245

//====[『CR』亗〆Ť I G E R〆亗 ]====\\

client.on('message', message => { 
if (message.guild) return undefined;
var room = client.channels.cache.get(Roomid);
if (!room) return undefined;
var emb = new Discord.MessageEmbed()
.setColor("GREEN")
.setThumbnail(message.author.avatarURL())
.setFooter(`From ${message.author.tag}`)
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setDescription(`**📨 ${message.author} [${message.author.id}] **\n\`\`\`Message:\n${message.content}\`\`\``)
.setFooter(`${client.user.username}`)
.setThumbnail(message.author.displayAvatarURL())
.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
.setTimestamp();
console.log(`${message.author.tag} > ${message.content}`);
room.send(emb);
});//『CR』亗〆Ť I G E R〆亗#0245

//====[『CR』亗〆Ť I G E R〆亗 ]====\\

const db = require("quick.db")
client.on("message", async message => {
let prefix2 = await db.fetch(`prefix_${message.guild.id}`);
if (prefix2 === null) prefix2 = `${Prefix}`;
const prefix = prefix2
if (message.author.bot) return;
if (!message.guild) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
if (cmd === "prefix") {
if (!message.member.roles.cache.has(D_ROLE)) return;
if (!args[0]) return message.channel.send(`**- Please tell me what a prefix !**`)
db.set(`prefix_${message.guild.id}`, args[0])
message.channel.send(`**✅ Done, Set New Prefix \`[${args[0]}]\` From Your Server.**`)
message.react("✅")
}
if (cmd === "send") {
message.channel.bulkDelete(1);
if (!message.member.roles.cache.has(D_ROLE)) return;
if (!message.channel.guild) return;
let user = message.mentions.users.first();
if (!user) return message.channel.send(`**Please mention user**`);
let msg = message.content.split(' ').slice(2).join(' ');
if (!msg) return message.channel.send(`**Please send the message**`);
var embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setTitle(`✅ | **__Done send the message__**`)
  .setDescription(`
**User: ${user}**
**Id : ${user.id}**
**Message : ${msg}**
**By : ${message.author.tag}**
**Time & Date : \`${message.createdAt.toLocaleString()}\`**`)
  .setFooter(`${client.user.username}`)
  .setThumbnail(user.displayAvatarURL())
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setTimestamp();
message.channel.send(embed);
user.send(new Discord.MessageEmbed()
  .setTitle(`**📨 Moderation Team Message **`)
  .setDescription(`**\`\`\`Message :\`\`\`\n${msg}**`)
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setTimestamp().setColor("GREEN"));
}
if (cmd === "close") {
message.channel.bulkDelete(1);
if (!message.member.roles.cache.has(D_ROLE)) return;
if (!message.channel.guild) return;
let user = message.mentions.users.first();
if (!user) return message.channel.send(`**Please mention user**`);
var embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setTitle(`✅ | **__Done closed the ticket__**`)
  .setDescription(`
**User: ${user}**
**Id : ${user.id}**
**By : ${message.author.tag}**
**Time & Date : \`${message.createdAt.toLocaleString()}\`**`)
  .setFooter(`${client.user.username}`)
  .setThumbnail(user.displayAvatarURL())
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setTimestamp();
message.channel.send(embed);
user.send(new Discord.MessageEmbed()
  .setTitle(`**📨 __Ticket Closed__**`)
  .setDescription(`**Thank you for contacting the mod team! Your case is now closed. Please reply if you would like to open a new case.**`)
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setTimestamp().setColor("RED"));
}
if (cmd === "wait") {
message.channel.bulkDelete(1);
if (!message.member.roles.cache.has(D_ROLE)) return;
if (!message.channel.guild) return;
let user = message.mentions.users.first();
if (!user) return message.channel.send(`**Please mention user**`);
var embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setTitle(`✅ | **__Done send system message__**`)
  .setDescription(`
**User: ${user}**
**Id : ${user.id}**
**By : ${message.author.tag}**
**Time & Date : \`${message.createdAt.toLocaleString()}\`**`)
  .setFooter(`${client.user.username}`)
  .setThumbnail(user.displayAvatarURL())
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setTimestamp();
message.channel.send(embed);
user.send(new Discord.MessageEmbed()
  .setTitle(`**📨 __System Message__**`)
  .setDescription(`**Thank you for contacting the mod team!
Please wait 5m to contact staff again.**`)
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setTimestamp().setColor("BLUE"));
}
if (cmd === "list") {
message.channel.bulkDelete(1);
if (!message.member.roles.cache.has(D_ROLE)) return;
if (!message.channel.guild) return;
let user = message.mentions.users.first();
if (!user) return message.channel.send(`**Please mention user**`);
var embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setTitle(`✅ | **__Done send system message__**`)
  .setDescription(`
**User: ${user}**
**Id : ${user.id}**
**By : ${message.author.tag}**
**Time & Date : \`${message.createdAt.toLocaleString()}\`**`)
  .setFooter(`${client.user.username}`)
  .setThumbnail(user.displayAvatarURL())
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setTimestamp();
message.channel.send(embed);
user.send(new Discord.MessageEmbed()
  .setTitle(`**📨 __System Message__**`)
  .setDescription(`**Thank you for your message! Our team will contact you through me as soon as we are available.**`)
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setTimestamp().setColor("BLUE"));
}
if (cmd === "help") {
message.channel.bulkDelete(1);
if (!message.member.roles.cache.has(D_ROLE)) return;
if (!message.channel.guild) return;
var embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .addField(`Staff+ Send DM`, `${prefix}send\`,\` ${prefix}close\`,\` ${prefix}wait\`,\` ${prefix}list\`,\` ${prefix}prefix`)
  .setFooter(`${client.user.username}`)
  .setThumbnail(message.author.displayAvatarURL())
  .setTimestamp();
message.channel.send(embed);
}
});
//====[『CR』亗〆Ť I G E R〆亗 ]====\\

client.on("message", message => {  
  if (message.channel.type === "dm") { 
  message.channel.startTyping();  
  setTimeout(() => {  
  message.channel.stopTyping();    
}, Math.random() * (1 - 4) + 1 * 1000);
 }  
});//『CR』亗〆Ť I G E R〆亗#0245

//====[『CR』亗〆Ť I G E R〆亗 ]====\\

