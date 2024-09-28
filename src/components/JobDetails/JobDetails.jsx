import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveStoreJob } from "../../Utlity/AppliedJob";

const JobDetails = () => {
  const { jobId } = useParams();
  const jobs = useLoaderData();
  const [job, setJob] = useState(null);
  
  const handleSaveJob = (id) => {
        saveStoreJob(id);
        toast("You have applied the job");
  }

  useEffect(() => {
    const findJob = jobs.find((job) => job.id === parseInt(jobId));
    setJob(findJob);
  }, [jobs, jobId]);
  if (!job) return <p>Loading...</p>;
  return (
    <div>
      <h2>{job.job_title}</h2>
      <p>
        <strong>Company:</strong> {job.company_name}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Job Type:</strong> {job.job_type}
      </p>
      <p>
        <strong>Salary:</strong> {job.salary}
      </p>
      <p>
        <strong>Job Description:</strong> {job.job_description}
      </p>
      <p>
        <strong>Job Responsibilities:</strong> {job.job_responsibility}
      </p>
      <p>
        <strong>Educational Requirements:</strong>{" "}
        {job.educational_requirements}
      </p>
      <p>
        Phone: {job.contact_information?.phone || "Phone number not available"}
      </p>
      <p>Email: {job.contact_information?.email || "Email not available"}</p>
      <p>
        Address: {job.contact_information?.address || "Address not available"}
      </p>
      <button className="btn btn-success m-2 text-white" onClick={()=>handleSaveJob(job.id)}>Apply Now</button>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
