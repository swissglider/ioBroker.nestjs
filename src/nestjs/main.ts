import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

type T_AdapterStr = {
    adapter: ioBroker.Adapter | undefined;
};
export const AdapterStr: T_AdapterStr = {
    adapter: undefined,
};

async function bootstrap(adapter: ioBroker.Adapter) {
    AdapterStr.adapter = adapter;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('IOBroker sendTo API')
        .setDescription('IOBroker sendTo API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        }),
    );
    app.enableCors();
    await app.listen(8089);
}

export default bootstrap;
