const {EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, CommandInteraction, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('createrolebutton')
    .setDescription('Set your role reaction channel')
    .addChannelOption(option =>
        option.setName('channel')
        .setDescription('Send role reaction embed in the channel')
        .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');

        const annonceEmbed = new EmbedBuilder()
        .setTitle("Pick Your Annoncements Roles")
        .setDescription('You can pick which announcements you wish to receive by clicking the buttons below.')
        .setColor('#db3b09')
		
        const customEmbed = new EmbedBuilder()
            .setTitle("Pick Your Custom Roles.")
            .setDescription('Tell your fellow a bit about yourself by clicking the buttons below.')
            .setColor(0x5fb041);

        const specialisedEmbed = new EmbedBuilder()
            .setTitle("Pick Your Specialised Roles.")
            .setDescription('You can pick which specialised you wish to receive by clicking the buttons below.')
            .setColor('#72706f');    
		
		
        let sendChannel = channel.send({
            embeds: [annonceEmbed, customEmbed, specialisedEmbed],
            components: [
                new ActionRowBuilder().setComponents(
                    new ButtonBuilder().setCustomId('SysAdmin').setEmoji('<:sysadmin:1101568462549176510>').setLabel('SysAdmin').setStyle(ButtonStyle.Danger),
                    new ButtonBuilder().setCustomId('Devs').setEmoji('<:devs:1101567631993090158>').setLabel('Devs').setStyle(ButtonStyle.Danger),
                    new ButtonBuilder().setCustomId('Pentester').setEmoji('<:pentester:1101567615186509926>').setLabel('Pentester').setStyle(ButtonStyle.Danger),
                ),    
                new ActionRowBuilder().setComponents(    
                    new ButtonBuilder().setCustomId('Proxmox').setEmoji('<:proxmox:1101555856216166531>').setLabel('Proxmox').setStyle(ButtonStyle.Success),
                    new ButtonBuilder().setCustomId('Vmware').setEmoji('<:vmware:1101555880631218226>').setLabel('Vmware').setStyle(ButtonStyle.Success),
                ),
                new ActionRowBuilder().setComponents(
                    new ButtonBuilder().setCustomId('Linux').setEmoji('<:LinuxTux:900432722927964250>').setLabel('Linux').setStyle(ButtonStyle.Secondary),
				    new ButtonBuilder().setCustomId('Windows').setEmoji('<:Windows:900432112178589696>').setLabel('Windows').setStyle(ButtonStyle.Secondary),
                ),
            ],
        });
        if (!sendChannel) {
            return interaction.reply({content: 'There was an error! Try again later.', ephemeral: true});
        } else {
            return interaction.reply({content: 'Role reaction channel was sucessfully set!', ephemeral: true});
        }
    },
};
