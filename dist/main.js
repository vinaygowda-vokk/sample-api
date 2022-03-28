"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const user_profile_module_1 = require("./user-profile/user-profile.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swaggerOptions = new swagger_1.DocumentBuilder()
        .setTitle('User')
        .setDescription('User Profile API Documentation')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'jwt')
        .build();
    const document_user = swagger_1.SwaggerModule.createDocument(app, swaggerOptions, {
        include: [user_profile_module_1.UserProfileModule],
    });
    swagger_1.SwaggerModule.setup('/swagger/user', app, document_user);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await app.listen(3000);
    console.log('\x1b[36m', `Application is running on url http://localhost:3000`);
}
bootstrap();
//# sourceMappingURL=main.js.map