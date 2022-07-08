import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { I_GetAllInstancesResult } from './get-all-instances.interface';
import { GetAllInstancesService } from './get-all-instances.service';
import { InputDataDto } from './inputData.dto';

@Controller('get-all-instances')
@ApiTags('get-all-instances')
export class GetAllInstancesController {
    constructor(private readonly getAllInstancesService: GetAllInstancesService) {}

    @Post()
    public async GetAllInstances(
        @Body() { instance, command, message = {}, timeout = 5000 }: InputDataDto,
    ): Promise<I_GetAllInstancesResult> {
        return this.getAllInstancesService.getAllInstances(instance, command, message, timeout);
    }
}
