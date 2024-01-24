import dotenv from 'dotenv';

dotenv.config();

type JarProps = {
  DISCORD_TOKEN: string;
  DISCORD_CLIENT_ID: string;
}

let props: JarProps | undefined;

export function config(): JarProps {
  if (props != null) return props;

  if (process.env.DISCORD_TOKEN == null) {
    throw new Error('Missing DISCORD_TOKEN');
  }

  if (process.env.DISCORD_CLIENT_ID == null) {
    throw new Error('Missing DISCORD_CLIENT_ID');
  }

  const newProps: JarProps = {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  }
  props = newProps;
  return newProps;
}
