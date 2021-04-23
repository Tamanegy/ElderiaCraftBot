module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musique stoppé car j'ai été déconnecter`);
};