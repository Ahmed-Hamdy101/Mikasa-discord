const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const welcome = require("./Welcome");
require("dotenv").config();
module.exports ={
 name : "ready",
once : true,
 execute (client , commands){

     console.log(" Eva is Here  !!");
     welcome(client);
     //register bot at discord
     
     const CLIENT_ID = client.user.id;
     const rest = new REST ({
        version  : "9"
     }).setToken(process.env.TOKEN);
     ( async () =>{
     try {
          if (process.env.ENV === "production") {
               await rest.put(Routes.applicationCommands(CLIENT_ID), {
                 body : commands
              
              });
              console.log("sucessfully registered! Golbally");
          }   else{
               await rest.put(Routes.applicationGuildCommands(CLIENT_ID , process.env.GUILD_ID), {
                 body : commands
              } );
              console.log("sucessfully registered! commands locally ! ");
          }
     } catch (err) {
          if (err) console.error(err);
     }
     })();
}
}
