import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { AppService } from '../services/app.service';
import type { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res:Response ,  @Req() req:Request): any {
   
    
  }
 
}
