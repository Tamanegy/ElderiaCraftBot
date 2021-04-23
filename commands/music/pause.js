module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - La musique est déjà en pause`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Le son ${client.player.getQueue(message).playing.title} a été mis en pause`);
    },
};