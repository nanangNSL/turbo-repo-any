import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignOutUserDto {
  @ApiProperty({ example : '47989875-266a-416e-8399-fe04f379bd11', description : 'user Id'})
  @IsString({
    message: 'User Id must be a string',
  })
  user_id: string;
}
