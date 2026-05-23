import JobCard from './JobCard';

function JobList({ jobs, educationLevelList, salaryLevelList }) {
  return (
    <div className="flex items-center flex-wrap gap-[18px]">
      {jobs.map((job) => (
        <JobCard 
          key={job.id} 
          job={job} 
          educationLevelList={educationLevelList}
          salaryLevelList={salaryLevelList}
        />
      ))}
    </div>
  );
}

export default JobList;