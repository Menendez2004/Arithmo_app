import { LocalSessionRepoImpl } from "../../../data/Repositories/LocaRepo";

const { outUser } = new LocalSessionRepoImpl();

export const OutUserCase  = async () => {
    return await outUser();
    
}