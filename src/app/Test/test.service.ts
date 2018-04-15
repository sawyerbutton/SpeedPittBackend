import { Component ,Inject} from "@nestjs/common";
import { Repository } from 'typeorm';
import { TestEntity} from './test.entity';
import {ITest,ITestService} from './Interfaces/index';


@Component()
export class TestService implements ITestService{

  constructor(
    @Inject('TestRepository') private readonly testRepository: Repository<TestEntity>,
    //private speedTest = require('speedtest-net'),
    // private test = speedTest({maxTime:5000})
  ){}

  //CRUD
  public async getAllInfo():Promise<Array<TestEntity>>{
    console.log('inject test');
    await this.testSpeed();
    return await this.testRepository.find();
  }

  public async getInfo(id:number):Promise<TestEntity | null>{
    return await this.testRepository.findOneById(id);
  }

  public async addInfo(test:ITest):Promise<TestEntity>{
    return await this.testRepository.save(test);
  }

  public async delete(id:number):Promise<string>{
    const test = await this.testRepository.deleteById(id);
    if(!test){
      return 'delete success';
    }else {
      return 'delete fail';
    }
  }
  //speed test
  // public async getInternetSpeed():Promise<ITest>{
  //   const msg = await
  // }

  public testSpeed(){
    this.test.on('data',data=>{
      console.dir(data);
    })
  }

  private speedTest = require('speedtest-net');
  private test = this.speedTest({maxTime: 5000});

}

