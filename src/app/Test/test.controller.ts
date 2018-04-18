import { Controller, Get, Patch, Post, Param, Body, Delete, UseFilters, Req } from '@nestjs/common';
import {TestService} from './test.service';
import { async } from 'rxjs/scheduler/async';

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
  public async addInfo(@Req() req){
    console.log("coming to controller awaiting for data");
    console.log(req.data);
    const msg = this.testService.addInfo(req.data);
    return msg;
  }
}