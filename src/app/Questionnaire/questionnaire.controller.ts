import {Controller, Get, Patch, Post, Param, Body,Delete,UseFilters} from '@nestjs/common';
import {CreateQuestionnaireDto} from './DTO/create-Questionnaire.dto';
import {QuestionnaireService} from './questionnaire.service';

@Controller('questionnaire')
export class QuestionnaireController{
  constructor(
    private questionnaireService:QuestionnaireService
  ){}

  @Get()
  public async getAllQuestionnaire(){
    const msg = this.questionnaireService.getAllQuestionnaire();
    return msg;
  }

  @Post()
  public async addQuestionnaire(@Body() questionnaire:CreateQuestionnaireDto){
    const msg = this.questionnaireService.addQuestionnaire(questionnaire);
    return msg;
  }
}