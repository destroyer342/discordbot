// ID : 954134777060016178
// Invite_link: https://discord.com/oauth2/authorize?client_id=954134777060016178&scope=bot&permissions=1
require("dotenv").config();
const discord = require('discord.js')
const client = new discord.Client({
    intents:["GUILDS","GUILD_MESSAGES", "DIRECT_MESSAGES"], partials:["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});



client.on("ready", (clientparams) => {
    console.log("this bot is now online " +client.user.tag)
})

client.on("messageCreate", (message) => {
if (message.author.bot == false){

    message.reply(`${message}`)
   
    
}
})
client.login(process.env.discordToken)
