'use strict';

import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Users {
  //主鍵，SQL Server識別種子
  @ObjectIdColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipcode: number;
}