import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import { testProvider} from './test.providers';
import { TestService} from './test.service';
import { TestController} from './test.controller';

@Module({
  imports:[
    DatabaseModule
  ],
  components:[
    testProvider,
    TestService,
  ],
  controllers:[
    TestController
  ]
})

export class TestModule{}