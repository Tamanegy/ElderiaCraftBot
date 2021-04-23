module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: '' },
                fields: [
                    { name: 'Salon', value: track.author, inline: true },
                    { name: 'Mis part', value: track.requestedBy.username, inline: true },
                    { name: 'Dans une playlist', value: track.fromPlaylist ? 'Oui' : 'Non', inline: true },

                    { name: 'Vue', value: track.views, inline: true },
                    { name: 'Duration', value: track.duration, inline: true },
                    { name: 'Filters activaté', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Mode loop', value: client.player.getQueue(message).repeatMode ? 'Oui' : 'Non', inline: true },
                    { name: 'En pause', value: client.player.getQueue(message).paused ? 'Oui' : 'Non', inline: true },

                    { name: 'Barre de progression', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};