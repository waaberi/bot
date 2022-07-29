module.exports = {
    name: "serverinfo",
    aliases: ["server", "info"],
    description: "Gives information about the serve",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}