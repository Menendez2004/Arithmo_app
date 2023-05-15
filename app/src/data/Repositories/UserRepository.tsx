import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repository/UserRepository";
import { ResponseAPI } from "../source/remote/api/model/ResponseApi";
import { ArithmoApi, ArithmoApiForImage } from "../source/remote/api/ArithmoApi";
import { ImagePickerAsset } from "expo-image-picker";
import mime from "mime";

export class UserRepositoryImpl implements UserRepository{

    async update(user: User): Promise<ResponseAPI>{
        try {

            const response = await ArithmoApi.put<ResponseAPI>("/users/updateWithoutImage", user);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError:ResponseAPI = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);

        };
    }

    async updateWithImage(user: User, file: ImagePickerAsset): Promise<ResponseAPI> {
        try {

            let data = new FormData();
            data.append("image", {
                // @ts-ignore
                uri: file.uri,
                name: file.uri,
                type: mime.getType(file.uri)!
            });
            data.append('user', JSON.stringify(user));
        
            const response = await ArithmoApiForImage.put<ResponseAPI>("/users/update", data);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);

        };
    }
}