const { CommandInteraction } = require("discord.js");

module.exports = {
    name: 'interactionCreate',

    execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) {
                interaction.reply({ content: "outdated command" });
            }

            command.execute(interaction, client);
        } else if (interaction.isButton()) {
            if (interaction.customId === 'verify') {
                const role = interaction.guild.roles.cache.get('1100833495925919805');
                if (interaction.member.roles.cache.has(role.id)) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `The role ${role} will be removed shortly!`,
                        ephemeral: true,
                    }),
                    );
                } else {
                    return interaction.member.roles
                    .add(role)
                    .then((member) =>
                    interaction.reply({
                        content: `You will receive the ${role} role shortly!`,
                        ephemeral: true,
                    }),
                    );
                }
            } else if (interaction.customId === 'dummy (just ignore this)') {
                const role = interaction.guild.roles.cache.get('1101543156807389225');
                if (interaction.member.roles.cache.has(role.id)) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `The role ${role} will be removed shortly!`,
                        ephemeral: true,
                    }),
                    );
                } else {
                    return interaction.member.roles
                    .add(role)
                    .then((member) =>
                    interaction.reply({
                        content: `You will receive the ${role} role shortly!`,
                        ephemeral: true,
                    }),
                    );
                }
            } else if (interaction.customId === 'Linux') {
                const role = interaction.guild.roles.cache.get('1101554131430285463');
                if (interaction.member.roles.cache.has(role.id)) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `The role ${role} will be removed shortly!`,
                        ephemeral: true,
                    }),
                    );
                } else {
                    return interaction.member.roles
                    .add(role)
                    .then((member) =>
                    interaction.reply({
                        content: `You will receive the ${role} role shortly!`,
                        ephemeral: true,
                    }),
                    );
                }
            } else if (interaction.customId === 'Windows') {
                const role = interaction.guild.roles.cache.get('1101552325383954432');
                if (interaction.member.roles.cache.has(role.id)) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `The role ${role} will be removed shortly!`,
                        ephemeral: true,
                    }),
                    );
                } else {
                    return interaction.member.roles
                    .add(role)
                    .then((member) =>
                    interaction.reply({
                        content: `You will receive the ${role} role shortly!`,
                        ephemeral: true,
                    }),
                    );
                }
            } else if (interaction.customId === 'Proxmox') {
                const role = interaction.guild.roles.cache.get('1101555709478453391');
                if (interaction.member.roles.cache.has(role.id)) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `The role ${role} will be removed shortly!`,
                        ephemeral: true,
                    }),
                    );
                } else {
                    return interaction.member.roles
                    .add(role)
                    .then((member) =>
                    interaction.reply({
                        content: `You will receive the ${role} role shortly!`,
                        ephemeral: true,
                    }),
                    );
                }
            } else if (interaction.customId === 'Vmware') {
                const role = interaction.guild.roles.cache.get('1101559419336142858');
                if (interaction.member.roles.cache.has(role.id)) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `The role ${role} will be removed shortly!`,
                        ephemeral: true,
                    }),
                    );
                } else {
                    return interaction.member.roles
                    .add(role)
                    .then((member) =>
                    interaction.reply({
                        content: `You will receive the ${role} role shortly!`,
                        ephemeral: true,
                    }),
                    );
                }
            } else if (interaction.customId === 'SysAdmin') {
                const role = interaction.guild.roles.cache.get('1101576538970927206');
                if (interaction.member.roles.cache.has(role.id)) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `The role ${role} will be removed shortly!`,
                        ephemeral: true,
                    }),
                    );
                } else {
                    return interaction.member.roles
                    .add(role)
                    .then((member) =>
                    interaction.reply({
                        content: `You will receive the ${role} role shortly!`,
                        ephemeral: true,
                    }),
                    );
                }
            } else if (interaction.customId === 'Devs') {
                const role = interaction.guild.roles.cache.get('1101576604502732810');
                if (interaction.member.roles.cache.has(role.id)) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `The role ${role} will be removed shortly!`,
                        ephemeral: true,
                    }),
                    );
                } else {
                    return interaction.member.roles
                    .add(role)
                    .then((member) =>
                    interaction.reply({
                        content: `You will receive the ${role} role shortly!`,
                        ephemeral: true,
                    }),
                    );
                }
            } else if (interaction.customId === 'Pentester') {
                const role = interaction.guild.roles.cache.get('1101576657724252200');
                if (interaction.member.roles.cache.has(role.id)) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `The role ${role} will be removed shortly!`,
                        ephemeral: true,
                    }),
                    );
                } else {
                    return interaction.member.roles
                    .add(role)
                    .then((member) =>
                    interaction.reply({
                        content: `You will receive the ${role} role shortly!`,
                        ephemeral: true,
                    }),
                    );
                }
            
            }
        }
    },
};
