import { Entity, Column, ObjectIdColumn,CreateDateColumn } from 'typeorm';

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

  // @CreateDateColumn({ name: 'created_at', nullable: false })
  // createdat: Date;

}