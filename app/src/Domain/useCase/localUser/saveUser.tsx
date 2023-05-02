import { LocalSessionRepoImpl } from "../../../data/Repositories/LocaRepo";
import { User } from "../../entities/User";

const { save } = new LocalSessionRepoImpl();

export const SaveUserCase  = async (user: User) => {
    return await save(user);
    
}