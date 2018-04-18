import { Component ,Inject} from "@nestjs/common";
import { Repository } from 'typeorm';
import { TestEntity} from './test.entity';
import {ITest,ITestService} from './Interfaces/index';



@Component()
export class TestService implements ITestService{

  constructor(
    @Inject('TestRepository') private readonly testRepository: Repository<TestEntity>,
  ){}

  //CRUD
  public async getAllInfo():Promise<Array<TestEntity>>{
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

}

