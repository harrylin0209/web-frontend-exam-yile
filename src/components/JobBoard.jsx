import decoLine from '../assets/deco-line.png';
import SearchToolbar from './SearchToolbar';
import JobList from './JobList';

function JobBoard() {
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
      <SearchToolbar />
      <JobList />
    </div>
  );
}

export default JobBoard;