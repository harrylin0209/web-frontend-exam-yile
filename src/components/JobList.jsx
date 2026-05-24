import { useState } from 'react';

import useItemsPerPage from '../hooks/useItemPerPage';
import JobCard from './JobCard';
import Pagination from './Pagination';


function JobList({ jobs, educationLevelList, salaryLevelList, onSelectJob }) {
  const itemsPerPage = useItemsPerPage(); // 取得動態的每頁筆數 (4 或 6)
  const [currentPage, setCurrentPage] = useState(1);

  // 1. 計算總頁數
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  // 安全防護：避免縮放視窗時，當前頁碼超出總頁數
  const validCurrentPage = Math.min(currentPage, totalPages) || 1;

  // 2. 切割當前頁面要顯示的資料
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = jobs.slice(startIndex, endIndex);


  return (
    <div>
      {
        currentItems.length > 0 ? (
          <>
            <div className="flex items-stretch flex-wrap gap-[18px] mb-3">
              {currentItems.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  educationLevelList={educationLevelList}
                  salaryLevelList={salaryLevelList}
                  onClick={onSelectJob}
                />
              ))}
            </div>
            <Pagination
              currentPage={validCurrentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        ) : (
          <div className="
            flex justify-center items-center 
            w-full h-[458px]
            border border-gray-500 rounded-[6px]
            text-gray-700">
            無資料
          </div>
        )
      }
    </div>
  );
}

export default JobList;