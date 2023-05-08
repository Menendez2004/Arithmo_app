import { ResponseAPI } from "../../data/source/remote/api/model/ResponseApi";
import { User } from "../entities/User"
import * as ImagePicker from 'expo-image-picker';


export interface AuthRepository {

    login(email: string, password: string): Promise<ResponseAPI>;
    register(user: User): Promise<ResponseAPI>;
    uploadphoto(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPI>;
};
