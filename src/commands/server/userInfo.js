const Eris = require("eris")

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}

function isUserID(arg) {
    return (arg.startsWith("<@!") || arg.startsWith("<@")) && arg.endsWith(">")
}

function getId(thing) {
    thing = thing.replace("<@", "")
    thing = thing.replace(">", "")
    thing = thing.replace("!", "")
    return thing;
}

module.exports = {
    name: "userinfo",
    aliases: ["user"],
    description: "Gives an information about a user",
    exec: async (bot, msg, args) => {
        let user;
        console.log(isUserID(args[1]))
        if(args && isUserID(args[1])) {
            user = bot.users.get(getId(args[1]))
            console.log(bot.users)
            console.log(user)
        } else {
            user = msg.author;
        }
        let userInfoEmbed = new Eris.RichEmbed()
        .setTitle("User information")
        .setFooter("Very reliable information... Just trust me")
        .addField("Username", String(user.username))
        .addField("ID", String(user.id))
        .addField("Account creation", String(new Date(user.createdAt)))
        .setImage(user.avatarURL)
        bot.createMessage(msg.channel.id, {embed: userInfoEmbed})
    }
}