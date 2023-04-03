const {SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
     data : new SlashCommandBuilder()
     .setName("update")
     .setDescription("Echo your update at channel")
     .addStringOption( (option) => 
               option         
               .setName("update")
     .setDescription("message to updated ")
     .setRequired(true) 
          )
          ,
async execute(Interaction){
          Interaction.reply( {
            content :  Interaction.options.getString("update"),
            ephemeral:false,
          });
          },
};
