import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateInitTestDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;
}
