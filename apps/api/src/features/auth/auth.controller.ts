import { Public } from '@/common/decorators';
import { JwtRefreshGuard } from '@/common/guards/jwt-refresh.guard';
import { RefreshTokenDto } from '@/features/auth/dto/refresh-token.dto';
import { SignInUserDto } from '@/features/auth/dto/signIn-user.dto';
import { SignOutUserDto } from '@/features/auth/dto/signOut-user.dto';
import { CreateUserDto } from '@/features/users/dto/create-user.dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags("AUTH")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  @ApiBody({type: CreateUserDto })
  async register(@Body() createUserDto: CreateUserDto) {
    const data = await this.authService.register(createUserDto);
    return {
      message: 'User registered successfully',
      data: data['data'],
      tokens: data['token'],
    };
  }

  @Public()
  @Post('sign-in')
  async signIn(@Body() signInUserDto: SignInUserDto) {
    const data = await this.authService.signIn(signInUserDto);
    return {
      message: 'User signed in successfully',
      data: data['data'],
      tokens: data['token'],
    };
  }

  @Post('sign-out')
  @ApiHeader({
    name : 'Authorization',
    description: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0Nzk4OTg3NS0yNjZhLTQxNmUtODM5OS1mZTA0ZjM3OWJkMTEiLCJ1c2VybmFtZSI6Im5hbmFuZzY3IiwiaWF0IjoxNzM0MTg2ODYwLCJleHAiOjE3MzQxOTQwNjB9.li6M_j9y-9IDGmU4OfT8sPIqy4lkb3pv3XAfo4lzQJs'
  })
  @ApiHeader({
    name : 'roles',
    description: 'USER'
  })
  async signOut(@Body() signOutUserDto: SignOutUserDto) {
    await this.authService.signOut(signOutUserDto);
    return { message: 'User signed out successfully' };
  }

  @Public()
  @UseGuards(JwtRefreshGuard)
  @Post('refresh-token')
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    const data = await this.authService.refreshToken(refreshTokenDto);
    return {
      message: 'Refresh token generated successfully',
      access_token: data['access_token'],
    };
  }
}
