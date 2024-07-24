import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateInitTestDto } from './dto/create-init-test.dto';

@Injectable()
export class AdminService {
    private prisma: PrismaClient = new PrismaClient();

    getAllInittest() {
        return this.prisma.initTest.findMany();
    }

    create(createInitTestDto: CreateInitTestDto) {
        return this.prisma.initTest.create({
            data: {
                name:createInitTestDto.name,
            },
        })
    }
}
