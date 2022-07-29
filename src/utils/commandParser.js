module.exports = (msg, bot, commands, prefix) => {
    let command = msg.content;
    command = command.split(" ");
    command[0] = command[0].slice(prefix.length)
    if(command[0] in commands) {
        console.log("Command " + command[0] + " called")
        commands[command[0]].exec(bot, msg, command.slice(0))
    } else {
        console.log("Using a command has been attempted, but it is not there!")
    }


}