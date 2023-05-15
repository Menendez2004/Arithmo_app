import { UserRepositoryImpl } from "../../../data/Repositories/UserRepository";
import { User } from "../../entities/User";

const {update} = new UserRepositoryImpl();

export const UpdateUserUserCase = async(user: User)=>{
    return await update(user);
}