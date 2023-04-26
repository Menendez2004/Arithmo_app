export interface ResponseAPI {
    success: boolean;
    message: string;
    data?:    any;
    error?:  any;
}