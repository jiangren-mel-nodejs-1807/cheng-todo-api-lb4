import { Entity, model, property, hasMany } from '@loopback/repository';
import { Todo } from './todo.model';

@model()
export class TodoList extends Entity {
  @hasMany(Todo)
  todo?: Todo[];

  @property({
    type: 'number',
    id: true,

  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    default: 'folder',

  })
  name: string;

  @property({
    type: 'string',

  })
  color?: string;

  constructor(data?: Partial<TodoList>) {
    super(data);
  }
}
