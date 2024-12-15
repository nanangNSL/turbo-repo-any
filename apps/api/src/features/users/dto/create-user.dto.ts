import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example : 'nanangdevelopers@gmail.com', description : 'Alamat email'})
  @IsEmail()
  email: string;

  @ApiProperty({ example : 'Pass@word', description : 'Password'})
  @IsString({
    message: 'Password must be a string',
  })
  password: string;
  @ApiProperty({ example : 'nanang67', description : 'Username'})
  @IsString({
    message: 'Username must be a string',
  })
  username: string;

  @ApiProperty({ example : 'Nanang Komarudin', description : 'Nama lengkap'})
  @IsString({
    message: 'Name must be a string',
  })
  name: string;

  @ApiProperty({ example : 'true', description : 'isActive'})
  @IsBoolean({
    message: 'Active status must be a boolean',
  })
  isActive: boolean;
}
