module.exports = {
    name: 'filter',
    aliases: ['f'],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Préciser un filtre a activer ou desactiver`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Ce filtre n'existe pas`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Je suis entrain **d'ajouter** ce filte a la musique, attendez... Note : Plus la musique est longue plus le bot mettra de temps`);
        else message.channel.send(`${client.emotes.music} - Je suis entrain **d'enlever** ce filtre a la musique attendez... Note : Plus la musique est longue plus le bot mettra de temps`);
    },
};