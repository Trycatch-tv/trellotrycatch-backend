import { IsNotEmpty, IsDate, IsOptional, IsString } from "class-validator";

export class CreateProjectDto {

    @IsNotEmpty({
        message: 'No puede ser vacío'
    })
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsDate()
    @IsOptional()
    StartDate: Date;

    @IsDate()
    @IsOptional()
    plannedCompletionDate: Date;

    @IsDate()
    @IsOptional()
    completionDate: Date;
}