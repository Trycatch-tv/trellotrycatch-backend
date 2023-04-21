import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('status')
export class Status {
  @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @CreateDateColumn()
   createdat: Date;

   @UpdateDateColumn()
   updatedat: Date;

   @DeleteDateColumn()
   deletedat: Date;
}

