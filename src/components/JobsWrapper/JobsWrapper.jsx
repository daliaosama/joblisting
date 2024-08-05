import JobItem from '../JobItem/JobItem';
import './JobsWrapper.css'
import { useState,useEffect } from 'react'
const JobsWrapper = () => {
  const [jobs,setJobs]=useState([]);
  useEffect(() => {
    function callJobs(){
      fetch('http://localhost:3000/jobs')
      .then((response)=>response.json())
      .then((final)=>setJobs(final))
    }
    callJobs();
  },[])
  return (
    <div id="JobsWrapper">
      {jobs.map((eachjob)=>
        {return <JobItem key={eachjob.id} eachjob={eachjob}></JobItem>})}
    </div>
  )
}

export default JobsWrapper