module.exports = {
    name: "ban",
    aliases: [],
    description: "Bans someone",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}