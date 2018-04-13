'use strict';

import { Controller, Get, Body, Post} from '@nestjs/common';
import { UsersServices } from '../users.service';
import { CreateUsersDTO } from '../DTO/createUsers.dto';@Controller()
export class UsersController {

  constructor(private readonly usersServices: UsersServices) {
  }

  @Get('users')
  public async getUsers() {
    const users = await this.usersServices.findAll();
    return users;
  }

  @Post('users')
  public async createUser(@Body() createUsersDTO: CreateUsersDTO) {

    const users = await this.usersServices.create(createUsersDTO);
    return users;
  }

}