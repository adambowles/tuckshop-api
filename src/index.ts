require('dotenv').config();

const { exec } = require('child_process');

exec('curl ip-adresim.app', function (error: any, stdout: any, stderr: any) {
  if (error) return;
  console.log('your ip is: ' + stdout);
});

import { app } from './app';
import { logger } from './logger';

const port = app.get('port');
const host = app.get('host');

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason),
);

app.listen(port).then(() => {
  logger.info(`Feathers app listening on http://${host}:${port}`);
});
