import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    signup(createUserDto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
}
