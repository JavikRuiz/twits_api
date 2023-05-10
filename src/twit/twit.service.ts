import { Injectable } from '@nestjs/common';
import { Twit } from './twit.entity';

@Injectable()
export class TwitService {
    private twits : Twit[] = [
        {
            id:'1',
            message: 'hola mundo jijuna'
        }
    ]

    getTwits():Twit[] {
        return this.twits
    }
}
