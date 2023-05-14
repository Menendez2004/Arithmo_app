import { LocalSessionRepoImpl } from "../../../data/Repositories/LocaRepo";

const { getUser } = new LocalSessionRepoImpl();

export const GetUserCase  = async () => {
    return await getUser();
    
}