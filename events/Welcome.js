const Discord = require("discord.js");
module.exports = (client) => {

const  member_channel = "920834562072924193";
const channel_Id = "920834562072924191";
client.on("guildMemberAdd" , (member)=>{
const  newMemberEmbed = new Discord.EmbedBuilder()
.setColor("#d81e5b")
.setTitle(`Please everyone Wave to The New Member`)
.setDescription( ` ${member.user} has Joined to  XEARTH Welcome ${member.user} to International chat !   Be Sure To Check out our  ${member.guild.channels.cache.get(member_channel)} Room  to add your profile ! and Thanks `)
.setThumbnail(member.user.displayAvatarURL())
.setTimestamp();
member.guild.channels.cache.get(channel_Id).send(
{
     embeds : [newMemberEmbed]
} );
member.guild.channels.cache.get("920834562072924196").send(
{
     embeds : [newMemberEmbed]
} );

});
}
