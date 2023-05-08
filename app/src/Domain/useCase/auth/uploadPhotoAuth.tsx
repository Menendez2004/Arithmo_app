import { AuthRepositoryImpl } from "../../../data/Repositories/AuthRepository";
import { User } from "../../entities/User";
import * as ImagePicker from 'expo-image-picker';


const {uploadphoto} = new AuthRepositoryImpl();


export const uploadphotoAuthUseCase = async (user: User, file: ImagePicker.ImagePickerAsset)=>{
    return await uploadphoto(user, file);
};