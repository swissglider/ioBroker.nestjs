import { Test, TestingModule } from '@nestjs/testing';
import { SendToController } from './send-to.controller';

describe('SendToController', () => {
    let controller: SendToController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SendToController],
        }).compile();

        controller = module.get<SendToController>(SendToController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
