module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Il n'y a pas de musique en cours sur le serveur`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Tu n'est connecté a aucun salon`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Je ne peut pas acceder a votre salon, vérifier mes permissions`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} n'est pas disponible dans votre pays`);
            break;
        case 'MusicStarting':
            message.channel.send(`La musique démarre... Attendez et re essayer`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Quelque chose ne vas pas ... Error : ${error}`);
    };
};
