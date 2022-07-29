// showing the images restricted to those with image perms
module.exports = {
    name: "wikipedia",
    aliases: ["wiki"],
    description: "Shows wikipedia information",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}