import { AxiosError } from "axios";
import { AuthRepository } from "../../Domain/repository/AuthRepository";
import { User } from "../../Domain/entities/User";
import { ArithmoApi } from "../source/remote/api/ArithmoApi";
import { ResponseAPI } from "../source/remote/api/model/ResponseApi";
// import * as mime from "mime";
// import * as ImagePicker from 'expo-image-picker'

export class AuthRepositoryImpl implements AuthRepository {
    
    async register(user: User): Promise<ResponseAPI> {
        try {

            const response = await ArithmoApi.post<ResponseAPI>("/users/create", user);
            return Promise.resolve(response.data);

        } catch (error) { 
            let e = (error as AxiosError);
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError:ResponseAPI = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);

        };
    };


   
    async login(email: string, password: string): Promise<ResponseAPI> {
        try {

            const response = await ArithmoApi.post<ResponseAPI>("/users/login", {
                email: email,
                password: password
            });
            return Promise.resolve(response.data);

        } catch (error) { 
            let e = (error as AxiosError);
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError:ResponseAPI = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);

        };
    };
};




