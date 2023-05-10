import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitController } from './twit/twit.controller';
import { TwitService } from './twit/twit.service';

@Module({
  imports: [],
  controllers: [AppController, TwitController],
  providers: [AppService, TwitService],
})
export class AppModule {}
