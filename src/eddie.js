require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');
var Test = require('./test.json');
const fs = require('fs');
//const queues = JSON.parse(fs.readFileSync('src/test.json', "utf8"))

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const prefix = ';';

client.login(process.env.TOKEN);

client.on('ready', async (c) => {
    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
      }, 10000);
    console.log('READY!');
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
                    value: 'The current version of Eddie JS is 1.0.0',
                    inline: false,
                  }
                );
          
              interaction.reply({ embeds: [helpMessage] });

              const helpMessage2 = new EmbedBuilder()
                .setTitle('Fun Commands')
                .setColor('#f194f2')
                .addFields(
                  {
                    name: 'ping',
                    value: `${interaction.command.description}`,
                    inline: false,
                  }
                );
          
              interaction.reply({ embeds: [helpMessage2] });
                break;
                case 'test':
                 
                break;
    }
});

let status = [
    {
      name: 'https://discord.gg/UUjYwRQmG',
      type: ActivityType.Watching,
      URL: "https://discord.gg/UUjYwRQmG"
    }
  ];

  const Queue = {
    channel: "",
    users: []
 };

 const queueJson = JSON.stringify(Test);