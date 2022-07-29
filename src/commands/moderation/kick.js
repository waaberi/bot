module.exports = {
    name: "kick",
    aliases: ["remove"],
    description: "Kicks someone from the server",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}