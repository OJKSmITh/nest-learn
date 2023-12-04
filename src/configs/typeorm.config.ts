import { TypeOrmModuleOptions } from "@nestjs/typeorm";

//  typeorm 설정 파일
export const typeORMConfig: TypeOrmModuleOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "",
    password: "",
    database: '',
    // logging:true,
    // logger:"advanced-console",
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize:true
}