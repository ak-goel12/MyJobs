import axiosAPI from "./axiosApi";

export const fetchJobs = (pageNo) => 
    new Promise((resolve,reject) => {
        const options = {
            url: process.env.REACT_APP_FETCH_JOBS_URL,
            method: 'get',
            params: {
                "page": pageNo
            },
            headers: {
                Authorization : localStorage.getItem('token'),
            }
        }
        axiosAPI(options)
        .then((res) => resolve(res.data.data))
        .catch(err => reject(err));
    })
