import { type CommandInteraction, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('getthejar')
  .setDescription('Someone get the jar...')
  .addUserOption(option =>
    option
      .setName('victim')
      .setDescription('The user to get the jar for')
      .setRequired(true),
  );

export async function execute(interaction: CommandInteraction): Promise<void> {
  await interaction.reply('todo!');
}
