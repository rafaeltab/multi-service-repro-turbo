import { Injectable } from '@nestjs/common';
import { thisIsAnExample } from '@multi-service-repro/service-a-infra';

@Injectable()
export class AppService {
  getHello(): string {
    return thisIsAnExample;
  }
}
