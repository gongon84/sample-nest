import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AdminService {
    private prisma: PrismaClient = new PrismaClient();

    getAllInittest() {
        return this.prisma.initTest.findMany();
    }
}
