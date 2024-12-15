import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    example : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0Nzk4OTg3NS0yNjZhLTQxNmUtODM5OS1mZTA0ZjM3OWJkMTEiLCJ1c2VybmFtZSI6Im5hbmFuZzY3IiwiaWF0IjoxNzM0MTg2ODk1LCJleHAiOjE3MzQxOTQwOTV9.XgK82npWXLPGunr-f0Fp-6IvWgEqF7sj0vGKuY-o8qY",
    description: 'Refresh token'
  })
  @IsString({
    message: 'Refresh token must be a string',
  })
  refresh_token: string;

  @ApiProperty({
    example: '47989875-266a-416e-8399-fe04f379bd11',
    description:'User ID'
  })
  @IsString({
    message: 'User Id must be a string',
  })
  user_id: string;
}
