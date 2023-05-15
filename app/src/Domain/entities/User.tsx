export interface User {
    id?:             string;
    name:            string;
    lastName:        string;
    email:           string;
    password:        string;
    confirmPassword: string;
    image?:          string;
    session_token?:  string;
    edad:            string;

}