require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType, REST, Routes, SlashCommandBuilder, PermissionsBitField, Guild, messageLink, WebhookClient } = require('discord.js');
// import { SlashCommandBuilder } from 'discord.js';
var Test = require('./test.json');
const fs = require('fs');
const { restart } = require('nodemon');
const { env, kill } = require('process');
const { options } = require('mongoose');
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
const ms = require('ms');
const { time, Console } = require('console');
const { on } = require('events');
const moment = require('moment');
const { channel } = require('diagnostics_channel');
var welcomer;
var welcomeMessage = "";
//import HelpCommand from './commands/help';

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const prefix = ';';

register();
client.login(process.env.TOKEN);

client.on('ready', async (c) => {
  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
  console.log('READY!');
});

function splitFirst(str, sep) {
  const [first, ...rest] = str.split(sep);
  const remainder = rest.join(' ');
  return { first, remainder };
}

client.on('messageCreate', async (msg) => {
  if (msg.content.toLowerCase().includes("im") && !msg.author.bot) {
    let result = msg.content.toLowerCase().slice(msg.content.toLowerCase().indexOf('im') + 3);
    if (msg.content.toLowerCase().slice(msg.content.toLowerCase().indexOf('im') + 2).startsWith(" "))
      msg.channel.send(`Hi ${result}, I'm Dad!`);
  }
  if (msg.content.toLowerCase().includes("i am") && !msg.author.bot) {
    let result = msg.content.toLowerCase().slice(msg.content.toLowerCase().indexOf('i am') + 5);
    if (msg.content.toLowerCase().slice(msg.content.toLowerCase().indexOf('im') + 5).startsWith(" "))
      msg.channel.send(`Hi ${result}, I'm Dad!`);
  }
  if (msg.content.toLowerCase().includes("i'm") && !msg.author.bot) {
    let result = msg.content.toLowerCase().slice(msg.content.toLowerCase().indexOf("i'm") + 4);
    if (msg.content.toLowerCase().slice(msg.content.toLowerCase().indexOf("i'm") + 3).startsWith(" "))
      msg.channel.send(`Hi ${result}, I'm Dad!`);
  }
  if (msg.content.toLowerCase().includes("i’m") && !msg.author.bot) {
    let result = msg.content.toLowerCase().slice(msg.content.toLowerCase().indexOf('i’m') + 4);
    if (msg.content.toLowerCase().slice(msg.content.toLowerCase().indexOf('i’m') + 3).startsWith(" "))
      msg.channel.send(`Hi ${result}, I'm Dad!`);
  }
  if (msg.content.toLowerCase().includes('play') || msg.content.toLowerCase().includes('playing') && !msg.author.bot)
    msg.channel.send('Are ya winning son?');
  var upper = msg.content.length - msg.content.replace(/[A-Z]/g, '').length;
  if (upper > 5 && !msg.author.bot)
    msg.channel.send(`OI ${msg.author} KEEP YOUR VOICE DOWN`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case 'ping':
      await interaction.deferReply();

      const reply = await interaction.fetchReply();

      const ping = reply.createdTimestamp - interaction.createdTimestamp;

      interaction.editReply(
        `Pong! ${ping}ms`
      );
      break;
    case 'help':
      const helpMessage = new EmbedBuilder()
        .setTitle('Eddie JS')
        .setThumbnail('https://images-ext-1.discordapp.net/external/OFZthgXj3O-aO1V89MW6wXmE4zuoIRCUCPm_1-natVo/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1095502458031194273/1ead915c513caa2878efe6bd597a7e3a.png?width=1058&height=1058')
        .setColor('#f194f2')
        .addFields(
          {
            name: 'Version',
            value: 'The current version of Eddie JS is 2.0.0',
          },
          {
            name: 'Server',
            value: `${interaction.guild.name}`,
          },
          {
            name: 'Prefix',
            value: 'The prefix is `/`',
          }
        );

      //interaction.reply({ embeds: [helpMessage] });

      const helpMessage2 = new EmbedBuilder()
        .setTitle('General Commands')
        .setColor('#f194f2')
        .addFields(
          {
            name: 'help',
            value: 'Gets a list of commands for the bot.',
          },
          {
            name: 'ping',
            value: 'Pings the bot to check if its working.',
          },
          {
            name: 'say',
            value: 'Say a message.',
          },
          {
            name: 'embed',
            value: 'Send an embed.',
          },
          {
            name: 'serverinfo',
            value: 'Get info about the server.',
          },
          {
            name: 'whois',
            value: 'Get info about a member.',
          },
        );

      const helpMessage3 = new EmbedBuilder()
        .setTitle('Fun Commands')
        .setColor('#f194f2')
        .setTimestamp()
        .addFields(
          {
            name: 'kill',
            value: 'Kills a user of your choice.',
          },
          {
            name: 'showerthoughts',
            value: 'Random shower thoughts.',
          },
          {
            name: 'pickle',
            value: "Lois grab the tape measure, we're measuring again.",
          },
          {
            name: 'coinflip',
            value: 'Flip a coin for a chance to get head.',
          },
        );

      interaction.reply({ embeds: [helpMessage, helpMessage2, helpMessage3] });
      break;
    case 'kill':
      const user = interaction.options.get('user').user.displayName;
      const author = interaction.user.displayName;
      var killMessages = [`${user} drank acid and melted`, `${user} was squashed by a falling piano`, `${user} sneezed too hard`,
      `${user} was backstabbed to death by joe momma`, `${author} pulled out too hard, killing ${user}`,
      `It was ${user}'s first day as a hitman`, `${user} got their toast out with a fork`, `${user} was sat on by nicocado avocado`,
      `${user} tried to swallow the couch`, `${user} died from looking at logan paul`, `${user} ate yellow snow`,
      `${user} got buried alive`, `${user} got angrily slapped in the throat`, `${user} got stomped on to death`,
      `${user} learned the hard way not to piss off ${author}`, `${user} didnt like ${author} when he was angry`,
      `${user} got stabbed with a pair of high heels`, `${user} said goodbye to earth`,
      `${user} took their helmet off in outer space`, `${user} tried to catch a pokemon on a hike`,
      `${user} traded their mp4 for an mp5`, `${user} dropped the soap`, `${user} was struck in the head by a nokia`];
      const killMessage = new EmbedBuilder()
        .setTitle(`${killMessages[getRandomInRange(0, killMessages.length)]}`)
        .setTimestamp()
        .setColor('#f194f2');
      interaction.reply({ embeds: [killMessage] });
      break;
    case 'say':
      const msg = interaction.options.get('message').value;
      interaction.reply({ content: msg });
      break;
    case 'embed':
      const title = interaction.options.get('title').value;
      const content = interaction.options.get('content').value;
      const embedMessage = new EmbedBuilder()
        .addFields({
          name: title,
          value: content,
        })
        .setColor('#f194f2');
      if (title === "specialruleseasteregg" && content === "87654")
        interaction.reply({ embeds: [customRulesMessage] });
      else
        interaction.reply({ embeds: [embedMessage] });
      break;
    case 'showerthoughts':
      const showerMessages = ["Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.", "'Go to bed, youll feel better in'" +
        "'the morning' is the human version of 'Did you turn it off and turn it back on again?'", "Theme parks can snap a crystal clear picture of you on a roller " +
        "coaster at 70 mph, but bank cameras can't get a clear shot of a robber standing still.", "If my calculator had a history, it would be more embarrassing than my " +
        "browser history.", "Lawyers hope you get sued, doctors hope you get sick, cops hope you're a criminal, mechanics hope you have car trouble, but only a thief wishes " +
        "prosperity for you.", "Tall people are expected to use their reach to help shorter people, but if a tall person were to ask a short person to hand them something they " +
        "dropped on the floor it'd be insulting.", "If I get up 10 minutes earlier than usual, I treat it like 2 extra hours and end up late for work.", "Aliens invaded the Moon " +
        "on July 20th, 1969.", "When you say 'Forward' or 'Back', your lips move in those directions.", "Instead of colorizing photos, in 50 years we will be removing " +
        "filters.", "I've woken up over 10,000 times and I'm still not used to it", "Tobacco companies kill their best customers and condom companies kill their future " +
        "customers.", "When a company offers me a better price after I cancel their subscription, they're just admitting they were overcharging me.", "Somewhere in the " +
        "world, there is somebody with your dream job that hates going to work everyday.", "'DO NOT TOUCH' would probably be a really unsettling thing to read in " +
        "braille.", "People who are goodlooking but have terrible personalities are basically real life click baits.", "When you drink alcohol you are just " +
        "borrowing happiness from tomorrow.", "Gyms should have memberships where your fee goes down based on how often you go.", "I recognize click bait " +
        "almost every time, but still want to know what that child celebrity looks like today.", "Nothing is on fire, fire is on things.", "Water isnt wet, " +
        "it just makes things wet", "I mostly use my driver's license to buy stuff that impairs my ability to drive.", "If Google matched people up by their " +
        "browsing history, it could be the greatest online dating website of all time.", "It's sad that having real ingredients in food products is a selling point."]
      const showerMessage = new EmbedBuilder()
        .setTitle(`${showerMessages[getRandomInRange(0, showerMessages.length)]}`)
        .setTimestamp()
        .setColor('#f194f2');
      interaction.reply({ embeds: [showerMessage] });
      break;
    case 'pickle':
      var repeatable = "=";
      const pickleMessage = new EmbedBuilder()
        .addFields({
          name: `${interaction.options.get('user').user.displayName}'s pickle size is`,
          value: `8${repeatable.repeat(getRandomInRange(1, 20))}D`,
        })
        .setTimestamp()
        .setColor('#f194f2');
      interaction.reply({ embeds: [pickleMessage] });
      break;
    case 'coinflip':
      const numberCheck = (getRandomInRange(0, 10) % 2 == 0) ? "Heads!" : "Tails!";
      const cfMessage = new EmbedBuilder()
        .setTitle(`${numberCheck}`)
        .setTimestamp()
        .setColor('#f194f2');
      interaction.reply({ embeds: [cfMessage] });
      break;
    case 'serverinfo':
      const serverinfoMessage = new EmbedBuilder()
        .setTitle(`${interaction.guild.name}`)
        .addFields({
          name: 'Owner',
          value: `${(await interaction.guild.fetchOwner()).user.username}`
        },
          {
            name: 'Members',
            value: `${await interaction.guild.memberCount}`
          },
          {
            name: 'Roles',
            value: `${interaction.guild.roles.cache.toJSON().length}`
          },
          {
            name: 'Text Channels',
            value: `${await interaction.guild.channels.channelCountWithoutThreads}`
          },
          {
            name: 'Voice Channels',
            value: `${await interaction.guild.channels.cache.filter((c) => c.type === 2).toJSON().length}`
          },
          {
            name: 'Categories',
            value: `${await interaction.guild.channels.cache.filter((c) => c.type === 4).toJSON().length}`
          },
          {
            name: 'Boosts',
            value: `${await interaction.guild.premiumSubscriptionCount}`
          },
          {
            name: 'Server ID',
            value: `${await interaction.guildId}`
          }
        )
        .setTimestamp()
        .setThumbnail(`${interaction.guild.iconURL()}`)
        .setColor('#f194f2');
      interaction.reply({ embeds: [serverinfoMessage] });
      break;
    case 'whois':
      const targetUser = interaction.options.get('user').user;
      const target = await interaction.guild.members.fetch(targetUser.id);
      const whoisMessage = new EmbedBuilder()
        .setTitle(`${target.user.displayName}`)
        .addFields({
          name: 'Tag',
          value: `${target.user.username}`
        },
          {
            name: 'Joined',
            value: `${moment.unix(target.user.createdAt / 1000).format('llll')}`
          },
          {
            name: 'Created',
            value: `${moment.unix(target.joinedAt / 1000).format('llll')}`
          },
          {
            name: 'Is bot?',
            value: `${target.user.bot}`
          },
          {
            name: 'Roles',
            value: `${target.roles.cache.toJSON()}`
          },
          {
            name: 'Permissions',
            value: `${target.permissions.toArray()}`
          })
        .setTimestamp()
        .setThumbnail(`${target.displayAvatarURL()}`)
        .setColor('#f194f2');
      interaction.reply({ embeds: [whoisMessage] });
      break;
    case 'dadjoke':
      const jokes = [
        "I'm afraid for the calendar. Its days are numbered.",
        "What do you call a fish wearing a bowtie? Sofishticated.",
        "How do you follow Will Smith in the snow? You follow the fresh prints.",
        "Dear Math, grow up and solve your own problems.",
        "What did the janitor say when he jumped out of the closet? Supplies!",
        "Have you heard about the chocolate record player? It sounds pretty sweet.",
        "I only know 25 letters of the alphabet. I don't know y.",
        "What did one wall say to the other? I'll meet you at the corner.",
        "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
        "Where do you learn to make a banana split? Sundae school.",
        "How do you get a squirrel to like you? Act like a nut.",
        "Why don't eggs tell jokes? They'd crack each other up.",
        "Why don't eggs tell jokes? They'd crack each other up.",
        "What do you call someone with no body and no nose? Nobody knows.",
        "Did you hear the rumor about butter? Well, I'm not going to spread it!",
        "Why couldn't the bicycle stand up by itself? It was two tired.",
        "Why can't a nose be 12 inches long? Because then it would be a foot.",
        "Graveyards are the one place people are dying to get into.",
        "What kind of car does an egg drive? A yolkswagen.",
        "How do you make 7 even? Take away the s.",
        "What time did the man go to the dentist? Tooth hurt-y.",
        "I used to be addicted to soap, but I'm clean now.",
        "A guy walks into a bar... and he was disqualified from the limbo contest.",
        "When two vegans get in an argument, is it still called a beef?",
        "What kind of shoes do ninjas wear? Sneakers!",
        "Why did the math book look so sad? Because of all of its problems!",
        "Shout out to my fingers. I can count on all of them.",
        "If a child refuses to nap, are they guilty of resisting a rest?"
      ];
      interaction.reply(`${jokes[getRandomInRange(0, jokes.length)]}`);
      break;
    case 'embarass':
      const webhook = interaction.channel.createWebhook({
        name: "A",
        avatar: 'https://i.imgur.com/AfFp7pu.png',
        channel: interaction.channel,
      }).catch(err => {
        return interaction.editReply({ content: `Error: an unknown error has occured!` })
      });
      await interaction.reply(`${webhook}`);
      try {
        await webhook.send({ embeds: [new EmbedBuilder().setColor('Blue').setDescription("Test")] });
      } catch (err) {

      }
      // interaction.channel.createWebhook({
      //   name: `${u}`,
      //   avatar: `${av}`
      // }).then(webhook => console.log(`Created webhook ${webhook}`)).catch(console.error);
      // var webhooks = interaction.channel.createWebhook(`${u}`, av);
      // const embarassments = [
      // "I watch my litt"
      //];
      //interaction.reply(`${jokes[getRandomInRange(0, jokes.length)]}`);
      break;
    // case 'welcomechannel':
    //   const channel = interaction.options.get('channel').channel.id;
    //   const messg = interaction.options.get('message').value;
    //   // let welc = JSON.parse(fs.readFileSync("src/welcome.json", "utf-8"));
    //   // if (!welc[interaction.guild.id]) {
    //   //   welc[interaction.guild.id] = {
    //   //     welc: channel,
    //   //   };
    //   // }
    //   // welcomer = welc[interaction.guild.id].welc;
    //  // fs.writeFile('src/welcome.json', JSON.stringify(welc), (err) => {

    //   // });
    //   fs.writeFile('src/welcomelist.txt', `|${interaction.guildId}|${channel}|${messg}|`, (err) => {

    //   });
    //   break;
  }
});

// client.on('guildMemberAdd', async (member) => {
//     const welcomingChannel = member.guild.channels.cache.get(welcomer);
//     var msg = welcomeMessage.replace('{user}', `**${member.user}**`);
//     var welcomeMsg = new EmbedBuilder()
//     .setThumbnail(member.user.avatarURL())
//     .setColor('#f194f2')
//     .addFields({
//       name: 'Welcome',
//       value: `${msg}`
//     });
//     welcomingChannel.send({embeds: [welcomeMsg.data]});
// });

let status = [
  {
    name: 'https://discord.gg/UUjYwRQmG',
    type: ActivityType.Watching,
    URL: "https://discord.gg/UUjYwRQmG"
  }
];

function getRandomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

async function register() {
  const helpCommand = new SlashCommandBuilder().setName('help').setDescription('Gets a list of commands for the bot.');
  const pingCommand = new SlashCommandBuilder().setName('ping').setDescription('Pings the bot to check if its working.');
  const showerCommand = new SlashCommandBuilder().setName('showerthoughts').setDescription('Random shower thoughts.');
  const coinflipCommand = new SlashCommandBuilder().setName('coinflip').setDescription('Flip a coin for a chance to get head.');
  const serverinfoCommand = new SlashCommandBuilder().setName('serverinfo').setDescription('Get info about the server.');
  const killCommand = new SlashCommandBuilder()
    .setName('kill')
    .setDescription('Kills a user of choice.')
    .addUserOption((option) => option.setName('user')
      .setDescription('user').setRequired(true));
  const welcomeCommand = new SlashCommandBuilder()
    .setName('welcomechannel')
    .setDescription('Set the channel for welcomer.')
    .addChannelOption((option) => option.setName('channel')
      .setDescription('channel').setRequired(true))
    .addStringOption((option) => option.setName('message')
      .setDescription('The welcome message for your server'));
  const whoisCommand = new SlashCommandBuilder()
    .setName('whois')
    .setDescription('Get info on a member.')
    .addUserOption((option) => option.setName('user')
      .setDescription('user').setRequired(true));
  const pickleCommand = new SlashCommandBuilder()
    .setName('pickle')
    .setDescription("Lois grab the tape measure, we're measuring again.")
    .addUserOption((option) => option.setName('user')
      .setDescription('user').setRequired(true));
  const sayCommand = new SlashCommandBuilder()
    .setName('say')
    .setDescription('Say a message.')
    .addStringOption((option) => option.setName('message')
      .setDescription('message').setRequired(true));
  const embedCommand = new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Send an embed.')
    .addStringOption((option) => option.setName('title')
      .setDescription('title').setRequired(true))
    .addStringOption((option) => option.setName('content')
      .setDescription('content').setRequired(true));
  const dadjokeCommand = new SlashCommandBuilder().setName('dadjoke').setDescription('Sends a dad joke');
  const embarassCommand = new SlashCommandBuilder().setName('embarass').setDescription('Embarasses a user').addUserOption((option) => option.setName('user').setDescription('user').setRequired(true));
  console.log('registering slash commands');
  const commands = [helpCommand.toJSON(), killCommand.toJSON(), pingCommand.toJSON(), sayCommand.toJSON(), embedCommand.toJSON(), showerCommand.toJSON(), pickleCommand.toJSON(),
  coinflipCommand.toJSON(), serverinfoCommand.toJSON(), whoisCommand.toJSON(), welcomeCommand.toJSON(), dadjokeCommand.toJSON(), embarassCommand.toJSON()];
  try {
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands
    });
  } catch (err) {
    console.log(err);
  }

  var channel = fs.readFile('src/welcomelist.txt', 'utf-8', (err, data) => {
    welcomer = data.split('|')[2];
    welcomeMessage = data.split('|')[3];
    console.log(data.split('|')[2]);
  });
}

const customRulesMessage = new EmbedBuilder()
  .setTitle('Rules for Dark Cavern')
  .addFields({
    name: 'Rule 1',
    value: 'Keep the server drama free! Anyone bringing drama into the server will be banned or muted depending on the severity, we wanna keep this server a safe place',
  })
  .addFields({
    name: 'Rule 2',
    value: 'No harassment of any members or staff',
  })
  .addFields({
    name: 'Rule 3',
    value: 'No racism will be tolerated at all, a ban will be given on sight',
  })
  .addFields({
    name: 'Rule 4',
    value: 'No advertising/dm advertising unless given explicit permission or someone asks you for an invite to something. If someone is sending you unsolicited invites, please open a ticket and we will take care of it',
  })
  .addFields({
    name: 'Rule 5',
    value: 'No dm advertising our server in any other servers. Just like how we wouldn’t want someone dm advertising here, other servers don’t want you dm advertising either.',
  })
  .addFields({
    name: 'Rule 6',
    value: 'Please make sure to follow discords terms of service',
  })
  .addFields({
    name: 'Rule 7',
    value: 'No adult content of any type is allowed outside of the specified channels',
  })
  .addFields({
    name: 'Rule 8',
    value: 'Please no edating in the server, go to tinder for that, this is a gaming discord',
  })
  .addFields({
    name: 'Rule 9',
    value: 'No sharing malicious links or files, which include any kind of virus or logger',
  })
  .addFields({
    name: 'Rule 10',
    value: 'Do not promote or encourage any kind of crimes or violence here',
  })
  .addFields({
    name: 'Rule 11',
    value: 'Please no talk about weapons, this server should feel welcoming to everyone who joins',
  })
  .addFields({
    name: 'Rule 12',
    value: 'No leaking personal info or photos of members, you will be banned',
  })
  .addFields({
    name: 'Rule 13',
    value: 'Keep all content in its appropriate channels',
  })
  .addFields({
    name: 'Rule 14',
    value: 'No sharing any private channels without explicit permission. Doing so will result in a ban, no questions asked',
  })
  .addFields({
    name: 'Rule 15',
    value: 'No spam pinging staff',
  })
  .addFields({
    name: 'Rule 16',
    value: 'No pinging ANY roles without a valid reason',
  })
  .setThumbnail('https://images-ext-1.discordapp.net/external/3kXdIHlZ2DXiFjj8YUUglYnefPSaT8xDemsQfCPExd4/%3Fsize%3D4096/https/cdn.discordapp.com/icons/1117664309661683712/7540a2d91ccfb726273da1f13d48dddd.png')
  .setColor('#f194f2');

const perms = {
  administrator: 'Administrator',
  manageGuild: 'Manage Server',
  manageRoles: 'Manage Roles',
  manageChannels: 'Manage Channels',
  manageMessages: 'Manage Messages',
  manageWebhooks: 'Manage Webhooks',
  manageNicknames: 'Manage Nicknames',
  manageEmojis: 'Manage Emojis',
  kickMembers: 'Kick Members',
  banMembers: 'Ban Members',
  mentionEveryone: 'Mention Everyone',
};