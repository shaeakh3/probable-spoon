import { Controller, Post } from '@nestjs/common';
import { CounterService } from './counter.service';
@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Post()
  increment() {
    return {
      msg: `counter is incresed , counter =${this.counterService.getCount()}`,
    };
  }

  @Post()
  getCount() {
    return {
      msg: `counter =${this.counterService.getCount()}`,
    };
  }
}
