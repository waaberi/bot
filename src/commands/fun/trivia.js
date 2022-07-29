// will have to find a proper API for that
module.exports = {
    name: "trivia",
    aliases: ["triviagame"],
    description: "Opens the trivia game | Not coded yet",
    exec: async (bot, msg, args) => {
        bot.createMessage(msg.channel.id, "Pong!")
    }
}