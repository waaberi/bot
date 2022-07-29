// restricted to those with image perms
module.exports = {
    name: "img",
    aliases: ["image"],
    description: "Gets an image from the web",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}