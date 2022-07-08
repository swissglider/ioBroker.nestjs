import { Test, TestingModule } from '@nestjs/testing';
import { GetAllInstancesController } from './get-all-instances.controller';

describe('GetAllInstancesController', () => {
    let controller: GetAllInstancesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [GetAllInstancesController],
        }).compile();

        controller = module.get<GetAllInstancesController>(GetAllInstancesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
