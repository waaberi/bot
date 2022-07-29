module.exports = {
    name: "changeprefix",
    aliases: ["prefix"],
    description: "Changes prefix",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}