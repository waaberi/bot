module.exports = {
    name: "help",
    aliases: ["commands"],
    description: "Gives all commands",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}