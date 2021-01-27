import { Module, Global } from '@nestjs/common';

import { AuthStrategyService } from './auth.strategy.service';
import { AuthStrategyGuard } from './auth.strategy.guard';

@Global()
@Module({
  imports: [AuthStrategyGuard],
  providers: [AuthStrategyService],
  exports: [AuthStrategyService],
})
export class AuthStrategyModule {}
