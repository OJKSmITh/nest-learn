import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "./board-status.enum";
import { ApiProperty } from "@nestjs/swagger";


@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number

    @Column()
    @ApiProperty()
    title: string;
    
    @Column()
    @ApiProperty()
    description: string;
    
    @Column()
    @ApiProperty()
    status: BoardStatus;
}