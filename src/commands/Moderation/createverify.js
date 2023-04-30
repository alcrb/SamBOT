const {EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, CommandInteraction, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('createverify')
    .setDescription('Set your verification channel')
    .addChannelOption(option =>
        option.setName('channel')
        .setDescription('Send verification embed in the channel')
        .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const verifyEmbed = new EmbedBuilder()
        .setTitle("Confirmation")
        .setDescription('While we know this can be annoying but we do require you to confirm you have read the rules before you can enter. Please press the button with the tick once read')
        .setColor(0x5fb041)
		
		
		
        let sendChannel = channel.send({
            embeds: [verifyEmbed],
            components: [
                new ActionRowBuilder().setComponents(
                    new ButtonBuilder().setCustomId('verified').setEmoji('<a:1031621324881285131:1101529469325418627>').setStyle(ButtonStyle.Primary),
					new ButtonBuilder().setCustomId('dummy (just ignore this)').setEmoji('<a:1031621377775648799:1101529490905112661>').setStyle(ButtonStyle.Primary),
                ),
            ],
        });
        if (!sendChannel) {
            return interaction.reply({content: 'There was an error! Try again later.', ephemeral: true});
        } else {
            return interaction.reply({content: 'Vérification channel was sucessfully set!', ephemeral: true});
        }
    },
};








