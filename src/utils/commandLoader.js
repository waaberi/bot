const fs = require("fs")
const path = require("path")
module.exports = () => {
    console.log("Loading commands....")
    let commands = {}
    for(let folder of fs.readdirSync(path.join(__dirname, "../commands"))) {
        for(let file of fs.readdirSync(path.join(__dirname, "../commands/" + folder))) {
            if(file.endsWith(".js")) {
                let temp = require("../commands/" + folder + "/" + file)
                temp.category = folder
                commands[file.replace(".js", "")] = temp
            }
        }
    }
    console.log("All commands loaded.. Sending to main file.")
    return commands
}