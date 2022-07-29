module.exports = (commands, alias) => {
    if(commands[alias]) return commands[alias]
    for (let command in commands) {
        if(commands[command].aliases.includes(alias)) {
            console.log("It has matched with an alias")
            console.log(commands[command]["name"])
            return commands[command];
        }
    }

    return undefined;
}