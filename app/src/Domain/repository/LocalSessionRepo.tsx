import {User} from "../entities/User"


export interface LocalSessionRepo{
    save(user: User): Promise<void>
    getUser(): Promise<User>
    outUser(): Promise<void>
};