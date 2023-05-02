import { LocalSessionRepoImpl } from "../../../data/Repositories/LocaRepo";
import { User } from "../../entities/User";

const { getUser } = new LocalSessionRepoImpl();

export const GetUserCase  = async () => {
    return await getUser();
    
}