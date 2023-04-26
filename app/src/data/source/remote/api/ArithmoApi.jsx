import axios from "axios";

    const ArithmoApi = axios.create({
        baseURL: "http://192.168.1.15:3000/api",
        headers:{
            'Content-Type': "application/json"  
        } 
    });

    export {ArithmoApi}
