module.exports = async (client) => {
    console.log(`En ligne en tant que ${client.user.username}. Prêt sur ${client.guilds.cache.size} serveur, pour un total de ${client.users.cache.size} personnes`);

    client.user.setActivity("ElderiaCraft", {
        type: "STREAMING",
        url: "https://www.twitch.tv/mchub"
      });
};  