import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthStrategyService {
  private PERIOD_TO_DO_AUTH = 3600000; // 1h in mile seconds

  private _oauthToken = '';
  get oauthToken(): string {
    return this._oauthToken;
  }

  private _timeOfLastAuthentication: number;

  constructor() {}

  public getAccessToken(): { token: string } {
    if (!this._oauthToken || this._oauthToken === '') {
      //GET TOKEN LOGIC
      this._oauthToken = `second-token-${Math.floor(Math.random() * 99999)}`;
      this._timeOfLastAuthentication = Date.now();
      console.log('token:first-condition', this._oauthToken);
      return { token: this._oauthToken };

      //IF Have Some ISSUE ON AUTHENTICATED THROW AN AUTHENTICATION EXCEPTION
      // throw new UnauthorizedException();
    }

    const currentTime = Date.now();
    const timeDifference = currentTime - this._timeOfLastAuthentication;
    if (timeDifference >= this.PERIOD_TO_DO_AUTH) {
      //GET TOKEN LOGIC
      this._oauthToken = `some-token-${Math.floor(Math.random() * 99999)}`;
      this._timeOfLastAuthentication = Date.now();
      console.log('token:second-condition', this._oauthToken);
      return { token: this._oauthToken };

      //IF Have Some ISSUE ON AUTHENTICATED THROW AN AUTHENTICATION EXCEPTION
      // throw new UnauthorizedException();
    }

    console.log('token:cached', this._oauthToken);
    return { token: this._oauthToken };
  }
}
