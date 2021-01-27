import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthStrategyGuard } from './auth.strategy/auth.strategy.guard';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/withauth')
  @UseGuards(AuthStrategyGuard)
  getWithAuth(): string {
    return 'Congrats you are Authenticated';
  }
}
