import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus, UpdateBoardStatusDto } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiProperty } from '@nestjs/swagger';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService:BoardsService){}

    @Get()
    @ApiOperation({summary: '게시판 전체 조회'})
    @ApiCreatedResponse({description: '모든 게시물 조회', type:[Board]})
    getAllBoard(): Promise<Board[]> {
        return this.boardsService.getAllBoards();
    }

    // @Get('/')
    // getAllBoard():Board[]{
    //     return this.boardsService.getAllBoards()
    // }
    @Post()
    @ApiOperation({summary: "게시물 작성하기"})
    @ApiCreatedResponse({description: '게시물 작성완료', type:Board})
    @UsePipes(ValidationPipe)
    createBoard(@Body() CreateBoardDto: CreateBoardDto):Promise<Board>{
        return this.boardsService.createBoard(CreateBoardDto)
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() createBoardDto: CreateBoardDto
        
    //     ):Board{
    //         return this.boardsService.createBoard(createBoardDto)
    // }

    @Get("/:id")
    @ApiOperation({summary:"ID를 통해 게시물 조회하기"})
    @ApiCreatedResponse({description:"조회 성공", type:Board} )
    getBoardById(@Param('id') id:number): Promise<Board>{
         
        return this.boardsService.getBoardById(id);
    }
    // @Get("/:id")
    // getBoardById(@Param('id') id:string):Board{
    //     return this.boardsService.getBoardById(id)
    // }

    // @Delete("/:id")
    // deleteBoard(@Param('id') id:string):void {
    //     this.boardsService.deleteBoard(id)
    // }
    
    @Delete('/:id')
    @ApiOperation({summary:"ID를 통해 게시물 삭제하기"})
    deleteBoard(@Param('id', ParseIntPipe) id):Promise<void>{
        return this.boardsService.deleteBoard(id)
    }

    @Patch("/:id/status")
    @ApiOperation({summary:"ID를 통해 게시물 업데이트 하기"})
    @ApiCreatedResponse({description:"업데이트 완료",type:Board })
    @ApiBody({
        description: '업데이트 할 상태 정보',
        type: UpdateBoardStatusDto
    })
    updateBoardStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', BoardStatusValidationPipe) status:BoardStatus
    ){
        return this.boardsService.updateBoardStatus(id,status)
    }

    // @Patch("/:id/status")
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status:BoardStatus
    // ){
        
    //     return this.boardsService.updateBoardStatus(id,status)
    // }
}
