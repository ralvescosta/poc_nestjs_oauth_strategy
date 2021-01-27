import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import { AuthStrategyService } from './auth.strategy.service';

@Injectable()
export class AuthStrategyGuard implements CanActivate {
  constructor(private readonly authService: AuthStrategyService) {}

  canActivate(context: ExecutionContext): any {
    const req = context.switchToHttp().getRequest();
    const result = this.authService.getAccessToken();
    req.oauth = result;
    return result;
  }
}
