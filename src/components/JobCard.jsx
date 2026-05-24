import jobIcon from '../assets/job-icon.png';
import educationIcon from '../assets/education-icon.png';
import salaryIcon from '../assets/salary-icon.png';

function JobCard({ 
  job, 
  educationLevelList, 
  salaryLevelList, 
  onClick
}) {
  const parseEducation = educationLevelList.find((edu) => Number(edu.id) === Number(job.educationId));
  const parseSalary = salaryLevelList.find((sal) => Number(sal.id) === Number(job.salaryId));

  return (
    <div className="w-full sm:w-[calc((100%-36px)/3)]">
      <div className="flex flex-col justify-between p-4 h-full
        border border-gray-500 rounded 
        hover:shadow-[0px_0px_8px_0px_#00000059]
      ">
        <div>
          <h3 className="mb-[10px] text-2xl text-gray-1000 font-bold">
            {job.companyName}
          </h3>
          <p className="flex items-center mb-2 text-sm text-gray-800">
            <img src={jobIcon} alt="Job Icon" 
              className="w-[18px] h-[18px] mr-[6px]" />
            {job.jobTitle}
          </p>
          <p className="flex items-center mb-2 text-sm text-gray-800">
            <img src={educationIcon} alt="Education Icon" 
              className="w-[18px] h-[18px] mr-[6px]" />
            {parseEducation ? parseEducation.label : 'N/A'}
          </p>
          <p className="flex items-center mb-2 text-sm text-gray-800">
            <img src={salaryIcon} alt="Salary Icon" 
              className="w-[18px] h-[18px] mr-[6px]" />
            {parseSalary ? parseSalary.label : 'N/A'}
          </p>
          <p className="mb-[10px] text-sm text-gray-1000 truncate">{job.preview}</p>
        </div>

        <div 
          className="flex justify-center items-center"
          onClick={() => onClick(job.id)}
        >
          <span className="text-sm text-orange-700 font-bold cursor-pointer">
            查看細節
          </span>
        </div>
      </div>
    </div>
  );
}

export default JobCard;