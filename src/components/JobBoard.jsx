import { useState, useEffect } from 'react';

import decoLine from '../assets/deco-line.png';
import SearchToolbar from './SearchToolbar';
import JobList from './JobList';
import { 
  getJobs,
  getEducationLevelList,
  getSalaryLevelList,
} from '../api/jobService';

function JobBoard({onSelectJob}) {
  const [filters, setFilters] = useState({
    keyword: '',
    educationLevel: '',
    salaryLevel: '',
  });

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [educationLevelList, setEducationLevelList] = useState([]);
  const [salaryLevelList, setSalaryLevelList] = useState([]);

  const fetchInitialData = async () => {
    const [
      jobsData,
      educationLevelData,
      salaryLevelData,
    ] = await Promise.all([
      getJobs(),
      getEducationLevelList(),
      getSalaryLevelList(),
    ]);

    setJobs(jobsData.data);
    setFilteredJobs(jobsData.data);
    setEducationLevelList(educationLevelData);
    setSalaryLevelList(salaryLevelData);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const nextJobs = jobs.filter((job) => {
      const matchKeyword =
        !filters.keyword ||
        job.companyName.includes(filters.keyword);

      const matchEducation =
        !filters.educationLevel ||
        job.educationId === Number(filters.educationLevel);

      const matchSalary =
        !filters.salaryLevel ||
        job.salaryId === Number(filters.salaryLevel);

      return (
        matchKeyword &&
        matchEducation &&
        matchSalary
      );
    });

    setFilteredJobs(nextJobs);
  };

  return (
    <div className="
      m-0 sm:m-7
      p-4 sm:p-6
      border-y sm:border border-gray-500 sm:rounded-xl
      bg-gray-100
      shadow-[2px_2px_4px_0px_#00000040]
    ">
      <div className="flex items-center mb-5">
        <img src={decoLine} alt="Title Decoration" className="mr-3"/>
        <h1 className="
          font-noto text-2xl text-gray-1000 font-bold 
          leading-[125%]
          tracking-normal
        ">
          適合前端工程師的好工作
        </h1>
      </div>
      <SearchToolbar
        filters={filters}
        educationLevelList={educationLevelList}
        salaryLevelList={salaryLevelList}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
      />
      <JobList 
        jobs={filteredJobs}
        educationLevelList={educationLevelList}
        salaryLevelList={salaryLevelList}
        onSelectJob={onSelectJob}
      />
    </div>
  );
}

export default JobBoard;