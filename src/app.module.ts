import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResultService } from './result/result.service';
import { ResultController } from './result/result.controller';

@Module({
  imports: [],
  controllers: [AppController, ResultController],
  providers: [AppService, ResultService],
})
export class AppModule {}
