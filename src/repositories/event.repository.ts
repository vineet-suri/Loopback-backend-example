import {DefaultCrudRepository} from '@loopback/repository';
import {Event} from '../models';
import {SampledbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EventRepository extends DefaultCrudRepository<
  Event,
  typeof Event.prototype.id
> {
  constructor(
    @inject('datasources.sampledb') dataSource: SampledbDataSource,
  ) {
    super(Event, dataSource);
  }
}
