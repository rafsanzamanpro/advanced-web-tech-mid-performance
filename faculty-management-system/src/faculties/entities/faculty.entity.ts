import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('faculties')
export class Faculty {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 100 })
  expertise!: string;

  @Column({ type: 'int' })
  noOfPublication!: number;
}