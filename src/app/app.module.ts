import { Module, NestModule,RequestMethod } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionnaireModule } from './Questionnaire/questionnaire.module';
import { TestModule } from './Test/test.module';
import {MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { SpeedTestMiddleware} from './middleware/speedTest.middleware'
import { TestController } from './Test/test.controller';
@Module({
  modules: [QuestionnaireModule,TestModule]
})
export class ApplicationModule implements NestModule{
  configure(consumer: MiddlewaresConsumer): void {
    //apply、forRoute方法允許傳入多個參數
    consumer.apply(SpeedTestMiddleware).forRoutes(
      { path: '/test', method: RequestMethod.POST },
    )
  }
}

