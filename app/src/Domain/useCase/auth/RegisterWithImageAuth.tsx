import * as ImagePicker from 'expo-image-picker';
import { AuthRepositoryImpl } from "../../../data/Repositories/AuthRepository";
import { User } from "../../entities/User";

const {registerWithImage} = new AuthRepositoryImpl();


export const RegisterWithImageUseCase = async (user: User, file: ImagePicker.ImagePickerAsset) =>{
    return await registerWithImage(user, file);
};