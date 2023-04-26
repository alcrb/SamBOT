const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('status')
	.setDescription('Set the bots status (devs only)')
	.addStringOption(option => option.setName('status').setDescription('The status you want as the bots presence').setRequired(true))
	.addStringOption(option => option.setName('type').setDescription('The type of status you want the bot to have').addChoices( { name: 'Watching', value: `${4}` }, { name: 'Playing', value: `${1}` }, { name: 'Listening', value: `${3}` }, { name: 'Competiting', value: `${6}` }, { name: 'Streaming', value: `${2}` })),
	async execute (interaction, client) {
		
		const { options } = interaction;
		const status = options.getString('status');
		const type = options.getString('type');
		
		if (interaction.user.id != "317748227044540419") return await interaction.reply({ content: `This command is only for devs`, ephemeral: true});
		else {
			
			client.user.setActivity({
				name: status,
				type: type-1,
				url : `https://www.twitch.tv`
			})
			
			const embed = new EmbedBuilder()
			.setColor("Blue")
			.setDescription(`:white_check_mark: The bot now has the status \`${status}\`, with the type ${type-1}`)
			
			await interaction.reply({ embeds: [embed], ephemeral: true });
		
		}
	}
}