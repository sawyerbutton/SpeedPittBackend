import { Component, Inject } from '@nestjs/common';
import { Users } from './users.entity';
import { IUsers, IUsersService } from './interfaces/index';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class UsersServices implements IUsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>) { }

  public async findAll(): Promise<Array<Users>> {
    return await this.usersRepository.find();
  }

  public async findOne(options: Object): Promise<Users | null> {
    return await this.usersRepository.findOne(options);
  }

  //restful API很常用。
  public async findById(ID): Promise<Users | null> {
    return await this.usersRepository.findOneById(ID);
  }

  public async create(users: IUsers): Promise<Users> {
    return await this.usersRepository.save(users);
  }
}
