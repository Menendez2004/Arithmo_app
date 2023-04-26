import { ResponseAPI } from "../../data/source/remote/api/model/ResponseApi";
import { User } from "../entities/User"


export interface AuthRepository {

    register(user: User): Promise<ResponseAPI>
};
