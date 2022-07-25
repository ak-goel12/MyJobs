import axiosAPI from "./axiosApi";

export const login = (email,password) => 
    new Promise((resolve,reject) => {
        const options = {
            url: process.env.REACT_APP_LOGIN_URL,
            method: 'post',
            data: {
                "email": email,
                "password": password
            },
        }
        axiosAPI(options)
        .then((res) => resolve(res.data))
        .catch(err => {
            reject(err)
        });
    })
