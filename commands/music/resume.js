module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - La musique est déjà en cours`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Le son ${client.player.getQueue(message).playing.title} a été remis`);
    },
};