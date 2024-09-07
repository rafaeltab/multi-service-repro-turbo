import { Injectable } from '@nestjs/common';
import { makeRequest } from '@multi-service-repro/service-b-infra';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return await makeRequest('http://localhost:3000');
  }
}
