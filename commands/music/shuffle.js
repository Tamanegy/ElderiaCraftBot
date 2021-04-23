module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - Queue mélangé **${client.player.getQueue(message).tracks.length}** son(s)`);
    },
};