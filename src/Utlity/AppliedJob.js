const getStoredJob = () => {
    const storedJob = localStorage.getItem('job_applied');
    if(storedJob){
        return JSON.parse(storedJob);
    }
    return [];
}

const saveStoreJob = id =>{
    const storedJob =getStoredJob();
    const exists = storedJob.find(jobID => jobID === id);
    if(!exists){
        storedJob.push(id);
        localStorage.setItem('job_applied', JSON.stringify(storedJob));
    }
}

export {saveStoreJob,getStoredJob} ;