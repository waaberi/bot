const aliasMatcher = require("./aliasMatcher")

module.exports = (msg, bot, commands, prefix) => {
    let command = msg.content;
    command = command.split(" ");
    command[0] = command[0].slice(prefix.length)
    if(aliasMatcher(commands, command[0])) {
        console.log("Command " + command[0] + " called")
        commands[command[0]].exec(bot, msg, command.slice(0))
    } else {
        console.log("Using a command has been attempted, but it is not there!")
    }


}