export interface IQuestionnaire {
  readonly id:number;
  readonly address1: string;
  readonly numberHousehold: number;
  readonly state: string;
  readonly city: string;
  readonly zipcode: number;
  readonly privateLocation:any;
}