import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@monorepo/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { user: User; formattedDate: string } {
    return this.appService.getHello();
  }
}
