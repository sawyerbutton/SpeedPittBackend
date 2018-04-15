export interface IQuestionnaire {
  readonly id: number;
  readonly name: string;
  readonly address1: string;
  readonly address2: string;
  readonly state: string;
  readonly city: string;
  readonly zipcode: number;
}