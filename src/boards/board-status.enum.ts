import { ApiProperty } from "@nestjs/swagger";

export enum BoardStatus {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}

export class UpdateBoardStatusDto {
    @ApiProperty({ enum: BoardStatus, example: BoardStatus.PUBLIC })
    status: BoardStatus
}