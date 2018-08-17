import { Filter, Where, repository } from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import { Todo } from '../models';
import { TodoRepository } from '../repositories';

export class TodoController {
  constructor(
    @repository(TodoRepository)
    public todoRepository: TodoRepository,
  ) { }

  @post('/todo')
  async create(@requestBody() obj: Todo)
    : Promise<Todo> {
    return await this.todoRepository.create(obj);
  }

  @get('/todo/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.todoRepository.count(where);
  }

  @get('/todo')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<Todo[]> {
    console.log(filter);
    return await this.todoRepository.find(filter);
  }

  @patch('/todo')
  async updateAll(
    @requestBody() obj: Todo,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.todoRepository.updateAll(obj, where);
  }

  @del('/todo')
  async deleteAll(@param.query.string('where') where?: Where): Promise<number> {
    return await this.todoRepository.deleteAll(where);
  }

  @get('/todo/{id}')
  async findById(@param.path.number('id') id: number): Promise<Todo> {
    return await this.todoRepository.findById(id);
  }

  @patch('/todo/{id}')
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() obj: Todo
  ): Promise<boolean> {
    return await this.todoRepository.updateById(id, obj);
  }

  @del('/todo/{id}')
  async deleteById(@param.path.number('id') id: number): Promise<boolean> {
    return await this.todoRepository.deleteById(id);
  }
}
