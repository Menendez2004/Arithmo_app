import { LocalSessionRepoImpl } from "../../../data/Repositories/LocaRepo";
import { User } from "../../entities/User";

const { outUser } = new LocalSessionRepoImpl();

export const OutUserCase  = async () => {
    return await outUser();
    
}