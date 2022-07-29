module.exports = {
    name: "ping",
    aliases: ["ping2", "ping3"],
    description: "Replies with pong",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}
module.exports = {
    name: "ping",
    aliases: ["ping2", "ping3"],
    description: "Replies with pong",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}