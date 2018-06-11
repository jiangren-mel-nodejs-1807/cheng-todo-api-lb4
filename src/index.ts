import {ChengTodoApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ChengTodoApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new ChengTodoApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
