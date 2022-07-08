import { Test, TestingModule } from '@nestjs/testing';
import { GetAllInstancesService } from './get-all-instances.service';

describe('GetAllInstancesService', () => {
    let service: GetAllInstancesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [GetAllInstancesService],
        }).compile();

        service = module.get<GetAllInstancesService>(GetAllInstancesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
