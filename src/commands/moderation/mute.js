module.exports = {
    name: "mute",
    aliases: ["timeout"],
    description: "Mutes someone",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}