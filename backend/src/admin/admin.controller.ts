import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateInitTestDto } from './dto/create-init-test.dto';
import { UpdateInitTestDto } from './dto/update-init-test.dto';

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

    @Get('init_test/:id')
    getInitTestById(@Param('id') id: string) {
        return this.adminService.getInitTestById(id);
    }

    @Patch('init_test/:id')
    update(@Param('id') id: string, @Body() updateInitTestDto: UpdateInitTestDto) {
        return this.adminService.update(id, updateInitTestDto);
    }

    @Delete('init_test/:id')
    remove(@Param('id') id: string) {
        return this.adminService.remove(id);
    }
}
