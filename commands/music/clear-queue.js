module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Il n'y a qu'un son dans la queue`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - La queue a été **supprimé** `);
    },
};