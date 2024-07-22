import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get('init_test')
    getAllInittest() {
        return this.adminService.getAllInittest();
    }
}
