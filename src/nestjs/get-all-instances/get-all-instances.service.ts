import { Injectable } from '@nestjs/common';
import { I_GetAllInstancesResult } from './get-all-instances.interface';

@Injectable()
export class GetAllInstancesService {
    // public async getAllInstances(instance, command, message, timeout): Promise<I_GetAllInstancesResult> {
    //     const GetAllInstancesResultPromise = AdapterStr.adapter?.getAllInstancesAsync(instance, command, message);
    //     const timoutPromise = new Promise((resolve) => {
    //         setTimeout(resolve, timeout, { error: `TimeoutError on ${instance} : ${command} after ${timeout}ms` });
    //     });
    //     const result = await Promise.race([GetAllInstancesResultPromise, timoutPromise]);
    //     return { result };
    // }
    public async getAllInstances(instance, command, message, timeout): Promise<I_GetAllInstancesResult> {
        return { result: { Hallo: 'Velo77' } };
    }
}
