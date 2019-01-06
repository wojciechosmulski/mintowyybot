const Discord = require('discord.js');
var bot = new Discord.Client();
const prefix = "!";
var request = require('request');



bot.on("ready", function() {
    bot.user.setActivity('Made by m1nty.eu');
    console.log("Im Ready!");
});
    
bot.on("message", function(message) {

    
    var msg = message.content.toLowerCase();
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);
    var msgauthor = message.author;
    var rcchanel = bot.guilds.find("id","408332310807707658").channels.find("name", "recruitments");

    //socials

    if (msg.startsWith(prefix + "youtube")) {
        message.channel.send("**Our Youtube :**\nhttps://www.youtube.com/channel/UCaZ8KVguZK6QTRjQH62XIWQ?view_as=subscriber");
    }
    if (msg.startsWith(prefix + "twitter")) {
        message.channel.send("**Our Twitter :**\nhttps://twitter.com/Scythe_RL");
    }
    if (msg.startsWith(prefix + "invite")) {
        message.channel.send("**Our pernament invite link :**\nhttps://discord.gg/kKRUrmK");
    }
    if (msg.startsWith(prefix+"socials")) {
        if (!args[0]) {
            message.channel.send("Available socials :\ntriguizz, minty");
        }
        var scmb = args[0]
    if (scmb = "minty") {
        message.channel.send(`**Socials of ${scmb} :**`+"\nm1nty.eu/\ntwitter.m1nty.eu/\nyoutube.m1nty.eu/");
    }
    if (scmb = "triguizz") {
        message.channel.send(`**Socials of ${scmb} :**`+"\nhttps://twitter.com/TriGuizz\nhttps://www.youtube.com/channel/UC5Q1S26eV3ivO2gmLldCN6w\nhttps://steamcommunity.com/id/TriGuizz/");
    } else {
        message.channel.send("Incorrect format : !socials *nickname*");
    }
    }

    //utilitty commands
    if(msg.startsWith(prefix + "clear")) {


        var channelID = message.channel;

        async function clear() {
            message.delete();

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel.send("You don't have permissions to use this command!");
                return;
            }

            if (isNaN(args[0])) {
                message.channel.send("**Please include amount of messages you want to delete**");
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send("Can't clear the chat!"));

                bot.channels.find("name", "logs").send(msgauthor.username + "** cleared : **" + (fetched.size) + "** messages in channel :** " + (channelID));

 }
        clear();
}
    if(msg.startsWith(prefix + "serverinfo")) {
            var sicon = message.guild.iconURL;
            var serverinfoembed = new Discord.RichEmbed()
                .setAuthor(message.guild.name, sicon)
                .setColor(0x0047B2)
                .setThumbnail(sicon)
                .addField("Name", message.guild.name,true)
                .addField("ServerID",message.guild.id,true)
                .addField("Owner", message.guild.owner.user.tag,true)
                .addField("Members", message.guild.memberCount,true)
                .setFooter("Server Created: " + message.guild.createdAt, sicon)

            message.channel.send(serverinfoembed);
}
    if (msg.startsWith(prefix+"everyone")) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
        let botmessage1 = args.join(" ");
        message.delete().catch();
        message.channel.send("@everyone"+", "+botmessage1);
    }
    if (msg.startsWith(prefix+"say")) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
        let botmessage = args.join(" ");
        message.delete().catch();
        message.channel.send(botmessage);
    }
    if (msg.startsWith(prefix+"gay")) {
        message.delete();
        var gay = message.guild.member(message.mentions.users.first());
        message.channel.send("<@!"+gay.id+">"+" is fucking gay");
    }
    if (msg.startsWith(prefix+"kys")) {
        message.delete();
        if (!args[0]) {
            message.channel.send("kys!");
        } else {
        var gay = message.guild.member(message.mentions.users.first());
        message.channel.send("kys "+"<@!"+gay.id+">"+"!");
        }
    }
    if (msg.startsWith(prefix+"copypaste")) {
        message.channel.send("https://pastebin.com/DC9Prm8u");
       }
    if (msg.startsWith(prefix +"karre")) {
        message.channel.send("U can't apply as retard"); 
       } 

    if (msg.startsWith(prefix +"help")) {
        var helpembed = new Discord.RichEmbed()
        .setTitle("Commands List")
        .addField("Our Youtube","!youtube")
        .addField("Our Twitter","!twitter")
        .addField("Invite Link","!invite")

        .setFooter("Bot developed by Minty")
        .setColor(0xFF2017)
        message.channel.send(helpembed);
    }

    //recruitments
    
    if (message.channel == bot.guilds.find("id", "448930120170995713").channels.find("name", "applications")) {
        if (message.author.equals(bot.user)) {
            if (message.content == "<@&531141617034199070> , there is new application waiting for your review!")
            {
                return
            }
        message.react("✅");
        message.react("❌");
        }
}

    if (message.channel == rcchanel) {
        message.delete();
    }
    if(message.channel == rcchanel) {
        if(msg.startsWith(prefix + "apply")) {
            if(!args[0]) {
                message.author.send("*Please provide a role u want to apply as!*");
                message.author.send("**Player, Designer or Editor**")
                return;
        }
        if((args[0] == "help")&&(!args[1])) {
            message.author.send("**How to apply**\n!apply role link1 link2 link3\n\n**Example:**\n!apply Player <https://link.com/> <https://link2.com/> <https://link3.com/>\n\n**MAX 10 LINKS DIVIDED WITH SPACE**\nSupported roles : **Player, Editor, Designer**");
            return;
        }
        if(!args[1]) {
            message.author.send("*Please provide minimum one link (max 10) featuring your plays, channel, portfolio*");
            return;
        }
        var role = args[0];


        var link1 = args[1];
        var link2 = args[2] || "Not provided";
        var link3 = args[3] || "Not provided";
        var link4 = args[4] || "Not provided";
        var link5 = args[5] || "Not provided";
        var link6 = args[6] || "Not provided";
        var link7 = args[7] || "Not provided";
        var link8 = args[8] || "Not provided";
        var link9 = args[9] || "Not provided";
        var link10 = args[10] || "Not provided";

        let rcembed = new Discord.RichEmbed()
        .setTitle(`New application as ${role}`)
        .setAuthor(message.author.tag)
        .addField("Link #1",link1)
        if (args[2]) {
            rcembed.addField("Link #2",link2)
        }
        if (args[3]) {
            rcembed.addField("Link #3",link3)
        }
        if (args[4]) {
            rcembed.addField("Link #4",link4)
        }
        if (args[5]) {
            rcembed.addField("Link #5",link5)
        }
        if (args[6]) {
            rcembed.addField("Link #6",link6)
        }
        if (args[7]) {
            rcembed.addField("Link #7",link7)
        }
        if (args[8]) {
            rcembed.addField("Link #8",link8)
        }
        if (args[9]) {
            rcembed.addField("Link #9",link9)
        }
        if (args[10]) {
            rcembed.addField("Link #10",link10)
        }
        rcembed.setColor(0xFF2017)
        .setThumbnail(message.author.avatarURL)
        .setFooter("Bot developed by Minty. http://m1nty.eu/")

        bot.guilds.find("id","408332310807707658").channels.find("name", "applications").send(rcembed);
        message.author.send(rcembed);
        message.author.send("Thats a preview of your application. Thank you for applying, your entry will be reviewed by leaders as soon as possible");
        bot.guilds.find("id", "448930120170995713").channels.find("name", "applications").send(rcembed);
        bot.guilds.find("id", "448930120170995713").channels.find("name", "applications").send("<@&531141617034199070> , there is new application waiting for your review!");
    } else {
        return message.author.send("**Incorrect format**, try again!\n!apply role link1 link2 link3\n\nExample : *!apply Player <https://link.com> <https://link2.com> <https://link3.com>*\n\n MIN 1 and MAX 10 links can be provided!\n**DIVIDE EVERY SINGLE WORD/LINK WITH SPACE ' '**");
        }
    } 
    
});

bot.login(process.env.BOT_TOKEN);
