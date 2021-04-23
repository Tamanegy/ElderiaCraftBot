module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - La selection a été **annuler**`);
    } else message.channel.send(`${client.emotes.error} - Vous devez entrer un nombre valide entre  **1** et **${tracks.length}**`);
};