import { useState, useCallback } from 'react';

import HeroIllustration from '../components/HeroIllustration';
import JobBoard from '../components/JobBoard';
import JobPanel from '../components/JobPanel';

import { getJobDetail } from '../api/jobService';

function Homepage() {
  const [selectedJobId, setSelectedJobId] = useState(null);
  // Job detail related states
  const [jobDetail, setJobDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleOpenPanel = useCallback(
    async (jobId) => {
      setSelectedJobId(jobId);
      setIsLoading(true);
      setError(null);
      setJobDetail(null);

      try {
        const data = await getJobDetail(jobId);
        setJobDetail(data);
      } catch (err) {
        setError('Failed to load job details. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const handleClosePanel = useCallback(
    () => {
      setSelectedJobId(null);
      setJobDetail(null);
      setError(null);
    },
    [],
  );

  return (
    <main className="
      pb-3 sm:pb-7 
      bg-[linear-gradient(90.51deg,#868686_1.54%,#5C5C5C_101.46%)]
    ">
      <HeroIllustration />

      <JobBoard onSelectJob={handleOpenPanel} />

      {selectedJobId && (
        <JobPanel 
          isLoading={isLoading}
          error={error}
          jobDetail={jobDetail}
          onClose={handleClosePanel} 
        />
      )}
    </main>
  );
}

export default Homepage;