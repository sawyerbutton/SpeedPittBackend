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
    // const data = await this.speedTestService.getSpeedInfo();
    // console.log(data);
    return await this.testRepository.find();
  }

  public async getInfo(id:number):Promise<TestEntity | null>{
    return await this.testRepository.findOneById(id);
  }

  public async addInfo(test:ITest):Promise<TestEntity>{
    return await this.testRepository.save(this.speedData);
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
  public speedData: ITest;

  public async logData(data){
    const id = null;
    const {download,upload} = data.speeds;
    const {ip, lat, lon, isp} = data.client;
    // const date = Date.now().toString();
    const msg:ITest = {id,download, upload,ip,lat,lon,isp};
    //const logData =await this.getLogData(data);
    this.speedData = msg;
    console.log(this.speedData);
  }

  public async addSpeedData(){
    const speedTest = require('speedtest-net');
    await speedTest({maxTime: 5000})
      .on('data',this.logData)
  }

}

