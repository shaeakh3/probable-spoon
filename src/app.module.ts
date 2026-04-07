import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CounterModule } from './counter/counter.module';
import { CounterModule } from './counter/counter.module';

@Module({
  imports: [UserModule, AuthModule, CounterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
