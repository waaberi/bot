const aliasMatcher = require("./aliasMatcher")

module.exports = (msg, bot, commands, prefix) => {
    let command = msg.content;
    command = command.split(" ");
    command[0] = command[0].slice(prefix.length)
    let propercmd = aliasMatcher(commands, command[0]) 
    if(propercmd) {
        console.log("Command " + propercmd.name + " called")
        propercmd.exec(bot, msg, command.slice(0))
    } else bot.createMessage(msg.channel.id, `<@!${msg.author.id}>, the command you have used does not exist!`)
}