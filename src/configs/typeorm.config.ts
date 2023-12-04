import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";


export const typeORMConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_USERPASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: configService.get('DATABASE_SYNCHRONIZE', true),
});