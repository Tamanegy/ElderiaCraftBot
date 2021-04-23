const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};


client.on('guildMemberAdd', (member) => {
    let welcomeChannel = client.channels.cache.get('834532273960255559');
    welcomeChannel.send('Un nouvel arrivant , bienvenue '  + member.user.username + ' ! :)');
    member.roles.add('834536612049453107');
    member.send('Bienvenue sur ElderiaCraft ! n\'hésite pas a allez dans le salon reglement afin d\'en prendre connaissance.');
});

client.on('guildMemberRemove', (member) => {
    let leaveChannel = client.channels.cache.get('834536612049453107');
    leaveChannel.send('Tu vas nous manquer ' + member.user.username + ' :\'(');
});



client.login(process.env.TOKEN);