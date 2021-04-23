module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Vous n'avez pas mis une bonne réponse ... envoyer une nouvelle fois la commande`);
};