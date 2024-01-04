import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateBoardDto {
    @IsNotEmpty()
    @ApiProperty()
    title: string
    
    @IsNotEmpty()
    @ApiProperty()
    description: string
}