import { Client, Events } from 'discord.js';
import { config } from '@/config';
import { commandRegister, deployCommands } from '@/command/command.controller';

const client = new Client({
  intents: ['Guilds', 'GuildMessages'],
});

client.once(Events.ClientReady, () => {
  console.log('The Jar is ready! :)');
});

client.on(Events.GuildCreate, async guild => {
  await deployCommands({ guildId: guild.id });
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  const command = commandRegister[commandName as keyof typeof commandRegister];
  if (command != null) {
    await command.execute(interaction);
  }
});

void client.login(config().DISCORD_TOKEN );
