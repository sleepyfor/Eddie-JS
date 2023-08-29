require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'ping',
        description: 'Pings the bot to check if its working.'
    },
    {
        name: 'help',
        description: 'Gets a list of commands for the bot.'
    },
    {
        name: 'test',
        description: 'test'
    }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
(async () => {
    try {
        console.log('Registering commands...');
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
            body: commands
        })
        console.log('Finished registering commands!');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();