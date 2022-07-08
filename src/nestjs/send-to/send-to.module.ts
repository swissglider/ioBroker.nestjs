import { Module } from '@nestjs/common';
import { SendToController } from './send-to.controller';
import { SendToService } from './send-to.service';

@Module({
    providers: [SendToService],
    exports: [SendToService],
    controllers: [SendToController],
})
export class SendToModule {}
