import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UserProfileModule } from './user-profile/user-profile.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerOptions = new DocumentBuilder()
    .setTitle('User')
    .setDescription('User Profile API Documentation')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'jwt',
    )
    .build();
  const document_user = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [UserProfileModule],
  });
  SwaggerModule.setup('/swagger/user', app, document_user);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3000);
  console.log(
    '\x1b[36m',
    `Application is running on url http://localhost:3000`,
  );
}
bootstrap();
