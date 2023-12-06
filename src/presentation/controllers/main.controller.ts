import { Controller, Get } from '@nestjs/common';

@Controller()
export class MainController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Chat Orchestrator running...';
  }

  @Get('/test')
  getTest(): string {
    return 'Apenas um teste';
  }
}
