import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { execSync } from 'child_process';
import { logger } from '../utils/log';

export default {
    data: new SlashCommandBuilder()
        .setName('generate')
        .setDescription("テキストファイルを作成します"),
    async execute(interaction: CommandInteraction) {
        try {
            execSync("touch sample.text");
            interaction.reply({
                content: "成功"
            });
        } catch (error) {
            logger.error(error);
        }
    }
};