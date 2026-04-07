import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
  private count = 0;
  increment() {
    this.count++;
  }
  getCount() {
    return this.count;
  }
}
