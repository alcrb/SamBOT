const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("verify2")
        .setDescription("This is the verification message"),

    async execute(interaction, client) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: "You must be an admin to create a verification message", ephemeral: true })
        

        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('button')
                    .setEmoji('✅')
                    .setLabel('Verify')
                    .setStyle(ButtonStyle.Success),
            )

        const embed = new EmbedBuilder()
            .setColor("Blue")
            .setTitle("Confirmation")
            .setDescription(`While we know this can be annoying but we do require you to confirm you have read the rules before you can enter. Please press the button with the tick once read`)

        await interaction.reply({ embeds: [embed], components: [button] });

        const collector = await interaction.channel.createMessageComponentCollector();

        collector.on(`collect`, async i => {

            await i.update({ embeds: [embed], components: [button] });

            const role = interaction.guild.roles.cache.find(r => r.name === 'Verified');

            const member = i.member;

            member.roles.add(role);

            i.user.send(`Bonjour, c'est Sam, vous êtes maintenant vérifié sur le serveur **${i.guild.name}** , merci de votre compréhension et à bientôt !`).catch(err => {
        })
    })
 }
}
