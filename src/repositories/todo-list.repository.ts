import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
  juggler
} from '@loopback/repository';
import { Todo, TodoList } from '../models';
import { inject } from '@loopback/core';
import { TodoRepository } from './todo.repository';

export class TodoListRepository extends DefaultCrudRepository<
  TodoList,
  typeof TodoList.prototype.id
  > {
  public todos: HasManyRepositoryFactory<Todo, typeof TodoList.prototype.id>;
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
    @repository(TodoRepository) protected todoRepository: TodoRepository
  ) {
    super(TodoList, datasource);
    this.todos = this._createHasManyRepositoryFactoryFor(
      'todos',
      todoRepository
    );
  }
}
