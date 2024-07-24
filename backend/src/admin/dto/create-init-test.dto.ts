import { IsString, IsNotEmpty } from 'class-validator';

export class CreateInitTestDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}