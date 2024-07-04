import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  private prisma: PrismaClient = new PrismaClient();

  async getHello(): Promise<{ message: string }> {
    const initTest = await this.prisma.initTest.findFirst();
    if (initTest) {
      return { message: initTest.name };
    } else {
      return { message: 'Not found' };
    }
  }
}
