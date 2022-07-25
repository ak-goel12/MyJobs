import axiosAPI from "./axiosApi";

export const fetchApplicant = (id) => 
    new Promise((resolve,reject) => {
        const options = {
            url: process.env.REACT_APP_FETCH_JOBS_URL+`/${id}/candidates`,
            method: 'get',
            headers: {
                Authorization : localStorage.getItem('token')
            }
        }
        axiosAPI(options)
        .then((res) => resolve(res.data.data))
        .catch(err => reject(err));
    })
