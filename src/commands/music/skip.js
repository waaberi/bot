module.exports = {
    name: "skip",
    aliases: ["s"],
    description: "Skips audio",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}