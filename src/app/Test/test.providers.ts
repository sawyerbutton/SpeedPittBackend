import { Connection } from 'typeorm';
import {TestEntity} from './test.entity';

export const testProvider = {
  provide:'TestRepository',
  useFactory:(connection: Connection)=>connection.getRepository(TestEntity),
  inject:['TypeORMInstance']
}