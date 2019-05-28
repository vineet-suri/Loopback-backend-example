import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {SampledbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userid
> {
  constructor(
    @inject('datasources.sampledb') dataSource: SampledbDataSource,
  ) {
    super(User, dataSource);
  }
}
