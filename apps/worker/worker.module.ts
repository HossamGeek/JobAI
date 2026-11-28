import { Module } from '@nestjs/common';
import { AppEnvironment } from '@app/common';

@Module({})
export class WorkerModule {
  static readonly environment = AppEnvironment.Test;
}
