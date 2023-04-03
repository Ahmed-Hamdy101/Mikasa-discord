
const {SlashCommandBuilder } = require("@discordjs/builders");
const interaction = require("../events/interactionCreate");
module.exports = {
     data : new SlashCommandBuilder()
     .setName('ping')
	.setDescription('Replies with Commands!')
	.addStringOption(option => option.setName('input').setDescription('Enter a string'))
	.addIntegerOption(option => option.setName('int').setDescription('Enter an amount $ '))
	.addBooleanOption(option => option.setName('choice').setDescription('Select a boolean'))
	.addUserOption(option => option.setName('target').setDescription('Select a user'))
	.addChannelOption(option => option.setName('destination').setDescription('Select a channel'))
	.addRoleOption(option => option.setName('muted').setDescription('Select a role'))
	.addNumberOption(option => option.setName('num').setDescription('Enter a number'))
	.addMentionableOption(option => option.setName('mentionable').setDescription('Mention something'))
	.addAttachmentOption(option => option.setName('attachment').setDescription('Attach something'))
	,async  execute(interaction){
          const string = interaction.options.getString('input');
               const integer = interaction.options.getInteger('int');
               const boolean = interaction.options.getBoolean('choice');
               const user = interaction.options.getUser('target');
               const member = interaction.options.getMember('target');
               const channel = interaction.options.getChannel('destination');
               const role = interaction.options.getRole('muted');
               const number = interaction.options.getNumber('num');
               const mentionable = interaction.options.getMentionable('mentionable');
               const attachment = interaction.options.getAttachment('attachment');

console.log({ string, integer, boolean, user, member, channel, role, mentionable, attachment, number });

             if(user) interaction.reply(`Oh Both  ${user} ${interaction.user}  Are Friends  :heart:   I like  You Both :smile:  `);     
             if(integer) interaction.reply(`You've got  Some  ${integer}$  ${interaction.user}  `);
             if(channel) interaction.reply(`Your  Channel is  ${channel}  / Mr.${interaction.user}  `);
             if(mentionable) interaction.reply(`You were Mention  to  ${mentionable}  / Mr.${interaction.user}  `);
               
          }
          }
