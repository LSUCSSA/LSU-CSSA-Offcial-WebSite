module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: true,
  },
  url: 'https://lsucssa.org/api',
  admin: {
    url: 'https://lsucssa.org/dashboard',
  },
});
