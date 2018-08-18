import { RestApplication, RestServer, RestBindings } from '@loopback/rest';
import * as fs from 'fs';
import { ChengTodoApiApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { ChengTodoApiApplication };

export async function main(options?: ApplicationConfig) {
  const httpsOptions = {
    rest: {
      protocol: 'https',
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./cert.pem'),
    },
  };
  const app = new ChengTodoApiApplication(httpsOptions);
  await app.boot();
  await app.start();
  return app;
}
