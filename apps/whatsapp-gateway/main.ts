import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.createApplicationContext(GatewayModule);
  app.enableShutdownHooks();
}

bootstrap().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`WhatsApp gateway failed to start: ${message}`);
  process.exitCode = 1;
});
