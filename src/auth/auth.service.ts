import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ){}

    async signUp(AuthCredentialsDto:AuthCredentialsDto):Promise<void>{
        return this.userRepository.createUser(AuthCredentialsDto)
    }
}
