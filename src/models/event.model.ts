import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Event extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'date',
    required: true,
  })
  start_date: string;

  @property({
    type: 'date',
    required: true,
  })
  end_date: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Event>) {
    super(data);
  }
}
