module.exports = {
    name: 'stop',
    aliases: ['st'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas connecté a un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`${client.emotes.success} - La musique a été **stoppé**`);
    },
};