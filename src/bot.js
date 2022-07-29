require("dotenv").config()
const config = require("./config/config.json")
const Eris = require("eris")
const bot = new Eris(process.env.TOKEN);
require("pluris")(Eris);

let commands = require("./utils/commandLoader")()

bot.on("ready", () => {
  console.log("Ready with " + bot);
});

bot.on("messageCreate", async (msg) => {
    if(msg.content.startsWith(config.prefix)) require("./utils/commandParser")(msg, bot, commands, config.prefix)
});

// other events will be managed later, in a new event folder

bot.connect();