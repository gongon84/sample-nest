import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateInitTestDto } from './dto/create-init-test.dto';
import { UpdateInitTestDto } from './dto/update-init-test.dto';

@Injectable()
export class AdminService {
    private prisma: PrismaClient = new PrismaClient();

    getAllInittest() {
        return this.prisma.initTest.findMany();
    }

    getInitTestById(id: string) {
        return this.prisma.initTest.findUnique({
            where: { id: parseInt(id) },
        });
    }

    create(createInitTestDto: CreateInitTestDto) {
        return this.prisma.initTest.create({
            data: {
                name:createInitTestDto.name,
            },
        })
    }

    update(id: string, updateInitTestDto: UpdateInitTestDto) {
        return this.prisma.initTest.update({
            where: { id: parseInt(id) },
            data: {
                name: updateInitTestDto.name,
            },
        });
    }

    remove(id: string) {
        return this.prisma.initTest.delete({
            where: { id: Number(id) },
        });
    }
}
