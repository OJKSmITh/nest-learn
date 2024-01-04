import { DataSource, Repository } from "typeorm";
import { User } from "./user.entity";
import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";

@Injectable()
export class UserRepository extends Repository<User>{
    constructor(private dataSource:DataSource){
        super(User, dataSource.createEntityManager())
    }

    async createUser(AuthCredentialsDto:AuthCredentialsDto):Promise<void>{
        const {username, password} = AuthCredentialsDto
        const user = this.create({username, password})
        try {
            await this.save(user)
        } catch (e) {
            if(e.code==='23505'){
                throw new ConflictException('Existing username')
            } else {
                throw new InternalServerErrorException()
            }
        }
    }
}