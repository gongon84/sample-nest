import { Controller, Get, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateInitTestDto } from './dto/create-init-test.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get('init_test')
    getAllInittest() {
        return this.adminService.getAllInittest();
    }

    @Post('init_test')
    create(@Body() createInitTestDto: CreateInitTestDto) {
        return this.adminService.create(createInitTestDto);
    }
}
