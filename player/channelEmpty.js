module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musique stoppé car il n'y a plus aucun membre dans le salon`);
};