import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();

  const port = Number(process.env.PORT ?? 3000);

  try {
    await app.listen(port);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`API failed to listen on port ${port}: ${message}`);
    await app.close();
    process.exitCode = 1;
  }
}

bootstrap().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`API failed to start: ${message}`);
  process.exitCode = 1;
});
