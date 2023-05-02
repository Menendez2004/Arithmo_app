import { ResponseAPI } from "../../data/source/remote/api/model/ResponseApi";
import { User } from "../entities/User"


export interface AuthRepository {

    login(email: string, password: string): Promise<ResponseAPI>;
    register(user: User): Promise<ResponseAPI>;
};
