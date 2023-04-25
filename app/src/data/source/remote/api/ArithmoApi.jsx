import axios from "axios";

    const ArithmoApi = axios.create({
        baseURL: "http://10.10.5.8:3000/api/",
        headers:{
            'Content-Type': "application/json"  
        } 
    });

    export {ArithmoApi}
