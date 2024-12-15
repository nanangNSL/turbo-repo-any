import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignInUserDto {
  @ApiProperty({ example : 'nanang67', description : 'Identifier atau username'})
  @IsString({
    message: 'Identifier must be a string',
  })
  identifier: string;

  @ApiProperty({ example : 'Pass@word', description : 'Password'})
  @IsString({
    message: 'Password must be a string',
  })
  password: string;
}
