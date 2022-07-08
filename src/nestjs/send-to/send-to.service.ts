import { Injectable } from '@nestjs/common';
import { AdapterStr } from '../main';
import { I_SendToResult } from './send-to.interface';

@Injectable()
export class SendToService {
    public async sendTo(instance, command, message, timeout): Promise<I_SendToResult> {
        const sendToResultPromise = AdapterStr.adapter?.sendToAsync(instance, command, message);
        const timoutPromise = new Promise((resolve) => {
            setTimeout(resolve, timeout, { error: `TimeoutError on ${instance} : ${command} after ${timeout}ms` });
        });
        const result = await Promise.race([sendToResultPromise, timoutPromise]);
        return { result };
    }
}
