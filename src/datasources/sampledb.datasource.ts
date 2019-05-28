import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './sampledb.datasource.json';

export class SampledbDataSource extends juggler.DataSource {
  static dataSourceName = 'sampledb';

  constructor(
    @inject('datasources.config.sampledb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
