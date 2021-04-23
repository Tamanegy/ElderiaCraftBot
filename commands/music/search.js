module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans un salon`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'est pas dans le même salon`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Indiquez le nom d'un son`);

        client.player.play(message, args.join(" "));
    },
};