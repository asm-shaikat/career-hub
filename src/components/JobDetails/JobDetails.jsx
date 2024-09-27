import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const {jobId} = useParams();
    const [job,setJob] = useState([]);

    useEffect( ()=>{
        fetch('/jobs.json')
        .then(response => response.json())
        .then(data => {
            const findJob = data.find(job => job.id === parseInt(jobId));
            setJob(findJob);
        })
        .catch(error =>console.error("Job Details Error: " + error))
        ,[jobId]})
        console.log(job);

    if(!job) return <p>Loading...</p>
    return (
        <div>
                <h2>{job.job_title}</h2>
                <p><strong>Company:</strong> {job.company_name}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Job Type:</strong> {job.job_type}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p><strong>Job Description:</strong> {job.job_description}</p>
                <p><strong>Job Responsibilities:</strong> {job.job_responsibility}</p>
                <p><strong>Educational Requirements:</strong> {job.educational_requirements}</p>
                <p>Phone: {job.contact_information?.phone || "Phone number not available"}</p>
                <p>Email: {job.contact_information?.email || "Email not available"}</p>
                <p>Address: {job.contact_information?.address || "Address not available"}</p>

        </div>
    );
};

export default JobDetails;