const hostnameFromEnv = () => process.env['HOSTNAME'] ?? 'localhost';

const portFromEnv = () => (process.env['PORT'] ? +process.env['PORT'] : undefined);

const isSecureProtocolFromEnv = () => process.env['PROTOCOL'] === 'https';

const protocol = (isSecure) => `http${isSecure ? 's' : ''}`;

export const url = (hostname, port, isSecure = true) =>
  port ? `${protocol(isSecure)}://${hostname}:${port}` : `${protocol(isSecure)}://${hostname}`;

export const urlFromEnv = () => url(hostnameFromEnv(), portFromEnv(), isSecureProtocolFromEnv());

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: urlFromEnv(),
  generateRobotsTxt: true,
  exclude: ['/openfeedback.json', '/*/openfeedback.json', '/manifest.webmanifest', '/talks/no-talks', '/*/talks/no-talks'],
  outDir: './out'
};
