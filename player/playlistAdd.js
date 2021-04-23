module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} a été ajouter a la queue (**${playlist.tracks.length}** sons)`);
};