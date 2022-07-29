const fs = require("fs")
const path = require("path")
module.exports = () => {
    console.log("Loading commands....")
    let commands = {}
    for(let folder of fs.readdirSync(path.join(__dirname, "../commands"))) {
        for(let file of fs.readdirSync(path.join(__dirname, "../commands/" + folder))) {
            console.log(file)
            if(file.endsWith(".js")) {
                let temp = require("../commands/" + folder + "/" + file)
                temp.category = folder
                //console.log("Command " + temp.name + " of category " + folder + " loaded!")
                commands[file.replace(".js", "")] = temp
            }
        }
    }
    console.log("All commands loaded.. Sending to main file.")
    return commands
}