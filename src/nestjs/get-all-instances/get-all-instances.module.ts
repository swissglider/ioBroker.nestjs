import { Module } from '@nestjs/common';
import { GetAllInstancesController } from './get-all-instances.controller';
import { GetAllInstancesService } from './get-all-instances.service';

@Module({
    providers: [GetAllInstancesService],
    exports: [GetAllInstancesService],
    controllers: [GetAllInstancesController],
})
export class GetAllInstancesModule {}
