// showing the images restricted to those with image perms
const Eris = require("eris")
const wiki = require("wikipedia")

module.exports = {
    name: "wikipedia",
    aliases: ["wiki"],
    description: "Shows wikipedia information",
    exec: async (bot, msg, args) => {
        console.log(args[1])
        const text = await wiki.summary(args[1])
        console.log(text)
        let wikiEmbed = new Eris.RichEmbed()
        .setTitle(text.displaytitle)
        .setDescription(text.description)
        .setURL(text.content_urls.desktop.page)
        .addField("Summary", text.extract)
        .setFooter("Powered by Wikipedia API")
        .setImage(text.thumbnail.source)
        bot.createMessage(msg.channel.id, {embed: wikiEmbed})
    }
}