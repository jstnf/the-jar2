import * as getthejar from '@/command/impl/getthejar.command';
import { config } from '@/config';
import { REST, Routes } from 'discord.js';

export const commandRegister = {
  getthejar,
};

const commandsData = Object.values(commandRegister).map(
  command => command.data,
);

const rest = new REST({ version: '10' }).setToken(
  config().DISCORD_TOKEN ,
);

type DeployCommandsProps = {
  guildId: string;
};

export async function deployCommands({
  guildId,
}: DeployCommandsProps): Promise<void> {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(
        config().DISCORD_CLIENT_ID ,
        guildId,
      ),
      {
        body: commandsData,
      },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}
