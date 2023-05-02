import { AuthRepositoryImpl } from "../../../data/Repositories/AuthRepository";

const {login} = new AuthRepositoryImpl();

export const LoginAuthCase =async (email:string, password: string) => {
    return await login(email, password);
}