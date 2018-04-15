import { Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionnaireModule } from './Questionnaire/questionnaire.module';
import { TestModule } from './Test/test.module';

@Module({
  modules: [QuestionnaireModule,TestModule]
})
export class ApplicationModule { }