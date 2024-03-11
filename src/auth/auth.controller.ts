// auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() loginDto: any) {
    const { username, password } = loginDto;
    // Validate credentials
    console.log(username + ':' + password);
    if (username === 'admin' && password === 'admin') {
      // If credentials are valid, return success message
      return 'hi admin';
    } else {
      return { message: 'Invalid email or password' };
    }
  }
  @Post('CreateSession')
  async CreateSession(@Body() Sessiondto: any) {
    const { title, description, Date, hour, datehour } = Sessiondto;
    // Validate credentials

    
    console.log(title, description, Date, hour, datehour);
    console.log('sent to database');
  }

  @Post('logout')
  async logout() {
    // You can perform any necessary logout logic here
    return { message: 'Logout successful' };
  }
}
