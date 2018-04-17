import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class TestEntity{
  @ObjectIdColumn()
  id:number;

  @Column()
  download:number;

  @Column()
  upload:number;

  @Column()
  ip:string;

  @Column()
  lat:number;

  @Column()
  lon:number;

  @Column()
  isp:string;

  // @Column()
  // date:string;

}