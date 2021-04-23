module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Entrez un nombre valide`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Entrez un nombre valide entre 1 et 100`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Le volume a été mis a **${parseInt(args[0])}%**`);
    },
};