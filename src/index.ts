import {Lb4BackendEgApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Lb4BackendEgApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new Lb4BackendEgApplication(options);
  await app.boot();
  await app.migrateSchema();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
