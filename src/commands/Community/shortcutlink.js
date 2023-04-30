require('dotenv').config();
const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } = require('discord.js');
const { Cooldown } = process.env;
const isgd = require('isgd');

module.exports = {
    cooldown: Cooldown,
    data: new SlashCommandBuilder()
        .setName('abbreviation')
        .setDescription('Create your own shortcut.')
        .addStringOption(option => option
            .setName('link')
            .setDescription('The link to add it to the shortcut.')
            .setRequired(true)
        ),

    /**
     * @param {ChatInputCommandInteraction} interaction 
     */

    async execute(interaction) {

        const link = interaction.options.getString("link")

        isgd.shorten(link, function (res) {
            interaction.reply({ content: `Shortcut Created Successfully \"${res}\" ` })
        });
    }

}