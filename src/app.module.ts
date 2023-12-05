import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: path.resolve(
        __dirname,
        '..',
        'src',
        'env',
        `${process.env.NODE_ENV}`==='production'
          ? '.env.production'
          : '.env.development'
      )
    }),
    // TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeORMConfig,
    }),
    BoardsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
