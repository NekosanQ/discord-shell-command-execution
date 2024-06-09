import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { execSync } from 'child_process';

export default {
    data: new SlashCommandBuilder()
        .setName('send')
        .setDescription("コマンドラインにメッセージを送信します")
        .addStringOption(option =>
            option.setName('message')
                .setDescription("送信したいメッセージ")
                .setMaxLength(100)
                .setRequired(true)),
    async execute(interaction: CommandInteraction) {
        await interaction.reply({
            content: `送信したメッセージ: ${interaction.options.get('message')?.value}`,
            ephemeral: true
        })
    }
};