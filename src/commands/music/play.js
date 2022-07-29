module.exports = {
    name: "play",
    aliases: ["song", "voice"],
    description: "Plays the song using the Voice API",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}