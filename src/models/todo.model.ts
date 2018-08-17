import { Entity, model, property } from '@loopback/repository';

@model()
export class Todo extends Entity {

  @property({
    type: 'number',
    id: true,

  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    default: 'todo',

  })
  name: string;

  @property({
    type: 'boolean',
    required: false,
    default: false,

  })
  done: boolean;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
