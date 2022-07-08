import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendToModule } from './send-to/send-to.module';

@Module({
    imports: [SendToModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
