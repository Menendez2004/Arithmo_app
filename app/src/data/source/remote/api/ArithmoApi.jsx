import axios from "axios";

    const ArithmoApi = axios.create({
        baseURL: "http://192.168.137.1:3000/api",
        headers:{
            'Content-Type': "application/json"  
        } 
    });

    export {ArithmoApi}
