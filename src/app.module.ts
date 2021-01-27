import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthStrategyModule } from './auth.strategy/auth.strategy.module';

@Module({
  imports: [AuthStrategyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
