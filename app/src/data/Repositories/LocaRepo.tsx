import { LocalSessionRepo } from "../../Domain/repository/LocalSessionRepo";
import { LocalStorage } from "../source/local/LocalStorage";
import { User } from "../../Domain/entities/User";

export class LocalSessionRepoImpl implements LocalSessionRepo{

    async save(user: User): Promise<void> {
        const { save } = LocalStorage();
        await save('user', JSON.stringify(user))
    };

    async getUser(): Promise<User> {
        const { getItem } = LocalStorage();
        const data = await getItem('user');
        const user: User = JSON.parse(data as any);
        return user;
    };

    async outUser(): Promise<void> { 
        const { outUser } = LocalStorage();
        await outUser('user');
    };
}