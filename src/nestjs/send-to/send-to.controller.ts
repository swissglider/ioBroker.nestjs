import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InputDataDto } from './inputData.dto';
import { I_SendToResult } from './send-to.interface';
import { SendToService } from './send-to.service';

@Controller('send-to')
@ApiTags('send-to')
export class SendToController {
    constructor(private readonly sendToService: SendToService) {}

    @Post()
    public async sendTo(
        @Body() { instance, command, message = {}, timeout = 5000 }: InputDataDto,
    ): Promise<I_SendToResult> {
        return this.sendToService.sendTo(instance, command, message, timeout);
    }
}
