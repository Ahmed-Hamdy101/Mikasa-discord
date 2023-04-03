module.exports ={
     name :"interactionCreate",
     async execute (Interaction){
          if (!Interaction.isCommand()) return ;
          const command = Interaction.client.commands.get(Interaction.commandName)
          if(!command) return;
          try {
               await command.execute(Interaction);
          } catch (err) {
               if (err) console.log(err);
               await Interaction.reply({
                    content: "An error  occurred while executing that command.",
                    ephemeral:true,
                    
               });
          }  
     }
     }
