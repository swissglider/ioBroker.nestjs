import { Test, TestingModule } from '@nestjs/testing';
import { SendToService } from './send-to.service';

describe('SendToService', () => {
    let service: SendToService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SendToService],
        }).compile();

        service = module.get<SendToService>(SendToService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
