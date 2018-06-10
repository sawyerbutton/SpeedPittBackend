
'use strict';

import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class QuestionnaireEntity {
  @ObjectIdColumn()
  id: number;

  @Column()
  address1: string;

  @Column()
  numberHousehold:number;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipcode: number;

  @Column()
  privateLocation:string;

  @Column()
  reasonNoInternet:string;

  @Column()
  computerDevice:boolean;
}