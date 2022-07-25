import { useState, useEffect } from "react";
import {fetchJobs} from '../api/fetchJobs';

const useFetchJobs = (pageNo) => {

  const [ jobs, setJobs] = useState(null);
  const [ count, setCount] = useState(0);
  const [ limit, setLimit] = useState(0);

  useEffect(() => {
      try{
        fetchJobs(pageNo).then((data) => { 
            setJobs(data.data)
            setCount(data.metadata.count)
            setLimit(data.metadata.limit)
            console.log(data);
        });
      }
      catch(err) {
          console.log(err);
      }
  }, [pageNo]);

  return [jobs,count,limit];
};

export default useFetchJobs;