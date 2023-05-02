export interface User {
    id?:             string;
    name:            string;
    lastName:        string;
    email:           string;
    password:        string;
    confirmPassword: string;
    session_token?:   string;

}