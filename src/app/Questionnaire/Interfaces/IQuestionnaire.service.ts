import {QuestionnaireEntity} from '../questionnaire.entity';
import {IQuestionnaire} from './IQuestionnaire';

export interface IQuestionnaireService {
  getAllQuestionnaire():Promise<Array<QuestionnaireEntity>>;
  getQuestionnaire(id:number):Promise<QuestionnaireEntity|null>;
  addQuestionnaire(questionnaire:IQuestionnaire): Promise<QuestionnaireEntity>;
  updateQuestionnaire(id:number,newQuestionnaire:IQuestionnaire):Promise<QuestionnaireEntity|null>;
  deleteQuestionnaire(id:number):Promise<string>;
}