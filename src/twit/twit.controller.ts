import { Controller, Get, Post, Param, Body, HttpCode, HttpStatus, Patch, Delete, Query} from '@nestjs/common';
import { TwitService } from './twit.service';

@Controller('twit')
export class TwitController {
    constructor(private readonly twitservice:TwitService) {}
    // con query en la URL -> /twit?buscar=Javier&orden=Alto
    // @Get()
    // getTwitsQuery(@Query() filters) {
    //     const { buscar, orden} = filters
    //     console.log(filters)
    //     return `buscar: ${buscar}... en orden: ${orden}`
    // }

    @Get()
    getTwits() {
        return this.twitservice.getTwits()
    }

    @Get(':id')
    getTwitId(@Param('id') id:string) : string {
        console.log(id)
        return `tu id es ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    createTwit(@Body('message') message:string) {
        console.log(`tu mensaje ${message}`)
        return `tu mensaje ${message}`
    }

    @Patch(':id')
    updateTwit(@Param('id') id:string) : string {
        return `Tu pinche twit Actualizado es: ${id}`
    }

    @Delete(':id')
    deleteTwit(@Param('id') id:string) : string {
        return `Tu pinche twit borrado es: ${id}`
    }
}
