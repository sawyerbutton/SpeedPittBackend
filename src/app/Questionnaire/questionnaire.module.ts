import {Module} from "@nestjs/common";
import { DatabaseModule } from '../Database/database.module'
import {QuestionnaireController} from './questionnaire.controller';
import {questionnaireProvider} from './questionnaire.providers';
import {QuestionnaireService} from './questionnaire.service';

@Module({
  imports:[DatabaseModule],
  components:[
    questionnaireProvider,
    QuestionnaireService
  ],
  controllers:[
    QuestionnaireController
  ]
})

export class QuestionnaireModule {}