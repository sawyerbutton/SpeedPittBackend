import {ITest} from './ITest';
import {TestEntity} from '../test.entity';

export interface ITestService {
  //for connect with database
  getAllInfo():Promise<Array<TestEntity>>;
  getInfo(id:number):Promise<TestEntity | null>;
  addInfo(test:ITest):Promise<TestEntity>;
  delete(id:number):Promise<string>;
  //for actual speed test

  // getInternetSpeed():Promise<ITest>;
}