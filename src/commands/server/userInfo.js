module.exports = {
    name: "userinfo",
    aliases: ["user"],
    description: "Gives an information about a user",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}