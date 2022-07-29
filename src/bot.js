require("dotenv").config()
const config = require("./config/config.json")
const Eris = require("eris")
const bot = new Eris(process.env.TOKEN);
require("pluris")(Eris);
const fs = require("fs");

const commands = require("./utils/commandLoader")()
const commandParser = require("./utils/commandParser")
bot.on("ready", () => {
  console.log("Ready with " + bot.user.username + "#" + bot.user.discriminator);
});

bot.on("messageCreate", async (msg) => {
    if(msg.content.startsWith(config.prefix)) {
      try {
        commandParser(msg, bot, commands, config.prefix)
      } catch (err) {
        bot.createMessage(msg.channel.id, err) // i have to fix this soon
      }
    }
});

// other events will be managed later, in a new event folder
// but for now, messageCreate is the only needed event

bot.connect();