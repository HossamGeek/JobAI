import { Module } from '@nestjs/common';
import { AppEnvironment } from '@app/common';

@Module({})
export class AppModule {
  static readonly environment = AppEnvironment.Development;
}
