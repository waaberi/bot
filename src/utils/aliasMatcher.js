module.exports = (commands, alias) => {
    if(commands[alias]) return commands[alias].name
    for (let command in commands) {
        console.log(commands[command].aliases)
        if(alias in commands[command].aliases) {
            return command.name;
        }
    }

    return undefined;
}