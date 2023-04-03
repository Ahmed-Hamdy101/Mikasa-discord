const {SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
     data : new SlashCommandBuilder()
     .setName("echo")
     .setDescription("Echo your input")
     .addStringOption( (option) => 
               option         
               .setName("message")
     .setDescription("message to echo ")
     .setRequired(true) 
          )
          ,
async execute(Interaction){
          Interaction.reply({
            content :  Interaction.options.getString("message"),
            ephemeral:false,
          });
          },
};
