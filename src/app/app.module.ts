import { Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionnaireModule } from './Questionnaire/questionnaire.module';

@Module({
  modules: [QuestionnaireModule]
})
export class ApplicationModule { }