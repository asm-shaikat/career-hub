import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [jobs,setJobs] = useState([]);

  useEffect( () =>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  },[])

    return (
        <div>
          <p>Welcome Home</p>  
          {jobs.map((job, index) => (
            <div key={index}>
              <div className="bg-slate-500 p-4 m-2 border border-red-600">
                <p>{job.company_name}</p>
                <p>{job.job_title}</p>
                <p>{job.salary}</p>
                <p>{job.experiences}</p>
                <Link to={`/jobs/${job.id}`}>
                  <button className="btn btn-accent text-white m-2">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
    );
};

export default Home;