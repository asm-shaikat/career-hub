import { useLoaderData } from 'react-router-dom';
import { getStoredJob } from '../../Utlity/AppliedJob';
import { useEffect, useState } from 'react';

const Jobs = () => {
  const jobs = useLoaderData();
  const [jobApplied, setJobApplied] = useState([]);
  const [displayJob,setDisplayJob] = useState([]);
  
  useEffect(() => {
    const storedJobData = getStoredJob();
    const appliedJobs = jobs.filter(job => storedJobData.includes(job.id));
    setJobApplied(appliedJobs);
    setDisplayJob(appliedJobs);
  }, [jobs]);

  const handleJobTye = type =>{
    if(type === 'all'){
        setDisplayJob(jobApplied);   
    }else if(type === 'remote'){
        const remoteJobData = jobApplied.filter( job => job.remote_or_onsite ==='Remote');
        setDisplayJob(remoteJobData);
    }else{
        const onsiteJobData = jobApplied.filter( job => job.remote_or_onsite ==='Onsite');
        setDisplayJob(onsiteJobData);
    }
  } 
  

  return (
    <div>
    <div className='flex gap-4'>
        <div>
        <h2 className='text-red-600'>Applied Jobs</h2>
        </div>
        <div>
            <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2 cursor-pointer">
                <li onClick={() => handleJobTye('all')}>All</li>
                <li onClick={() => handleJobTye('remote')}>Remote</li>
                <li onClick={() => handleJobTye('onsite')}>Onsite</li>
            </ul>
            </details>
        </div>
    </div>
      {jobApplied.length > 0 ? (
        displayJob.map((job) => (
          <div key={job.id}>
            <div className='border border-cyan-300 m-4 p-4'>
                <p>{job.job_title} at {job.company_name}</p>
                <small>Employee Type: {job.remote_or_onsite}</small>
            </div>
          </div>
        ))
      ) : (
        <p>No applied jobs yet.</p>
      )}
    </div>
  );
};

export default Jobs;
