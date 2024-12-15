import { Base } from '@/common/entities';
import { _hashString } from '@/common/utils';
import { BeforeInsert, Column, Entity } from 'typeorm';

@Entity()
export class User extends Base {
  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
    type: 'varchar',
    default: true,
  })
  password: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  name: string;

  @Column({
    nullable: false,
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  refreshToken: string | null;

  @BeforeInsert()
  async hashPassword() {
    this.password = await _hashString(this.password);
  }
}
