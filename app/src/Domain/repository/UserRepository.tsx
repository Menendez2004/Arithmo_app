import { ResponseAPI } from "../../data/source/remote/api/model/ResponseApi";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker'

export interface UserRepository{

    update(user: User): Promise<ResponseAPI>
    updateWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPI>

}