module.exports = {
    name: "search",
    aliases: ["find", "get"],
    description: "Offers a selection of audio files",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}