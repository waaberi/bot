const fs = require("fs")
const path = require("path")
module.exports = () => {
    console.log("Loading commands....")
    let commands = {}
    for(let file of fs.readdirSync(path.join(__dirname, "../commands"))) {
        if(file.endsWith(".js")) {
            let temp = require("../commands/" + file)
            console.log("Command " + temp.name + " loaded!")
            commands[temp.name] = temp
        }
    }
    console.log("All commands loaded.. Sending to main file.")
    return commands
}