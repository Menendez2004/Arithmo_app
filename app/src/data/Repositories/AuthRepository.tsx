import { AuthRepository } from "../../Domain/repository/AuthRepository";
import { User } from "../../Domain/entities/User";
import { ArithmoApi } from "../source/remote/api/ArithmoApi";
import { ResponseAPI } from "../source/remote/api/model/ResponseApi";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: User) {
        try {

            const response = await ArithmoApi.post<ResponseAPI>("/users/create",user);
            return Promise.resolve({ error: undefined, result: response.data });

        } catch (error) {

            let e = (error as Error).message;
            console.log("ERROR: " + e);
            return Promise.resolve({ error: e, result: undefined });

        };
    };
};



