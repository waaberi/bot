require("dotenv").config()
const config = require("./config/config.json")
const Eris = require("eris")

console.log(config)

const bot = new Eris(process.env.TOKEN);

let commands = require("./utils/commandLoader")()

bot.on("ready", () => {
  console.log("Ready with " + bot);
});

bot.on("messageCreate", async (msg) => {
    if(msg.content.startsWith(config.prefix)) require("./utils/commandParser")(msg, bot, commands, config.prefix)
});

bot.connect();