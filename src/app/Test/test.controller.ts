import { Controller, Get, Patch, Post, Param, Body, Delete, UseFilters, Req } from '@nestjs/common';
import {TestService} from './test.service';

@Controller('test')
export class TestController{
  constructor(
    private testService: TestService
  ){}

  @Get()
  public async getAllInfo(){
    const msg = await this.testService.getAllInfo();
    return msg;
  }

  @Post()
  public async addInfo(@Body() data){
    const msg = this.testService.addInfo(data);
    return msg;
  }
}