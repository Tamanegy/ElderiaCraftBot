module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a pas de son en cours`);

        message.channel.send(`**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(loop)' : ''}**\nEn cours : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (Mis part : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Et **${queue.tracks.length - 5}** Autre sons` : `Dans la playlist **${queue.tracks.length}** son(s)...`}`));
    },
};