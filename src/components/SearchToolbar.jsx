function SearchToolbar(props) {
  const {
    filters,
    educationLevelList,
    salaryLevelList,
    onFilterChange,
    onSearch,
  } = props;

  const handleKeywordChange = (event) => {
    onFilterChange('keyword', event.target.value);
  };

  const handleEducationChange = (event) => {
    onFilterChange(
      'educationLevel',
      event.target.value
    );
  };

  const handleSalaryChange = (event) => {
    onFilterChange(
      'salaryLevel',
      event.target.value
    );
  };

  return (
    <div className="hidden sm:flex justify-between items-center gap-x-3 mb-5">
      <div className="relative w-[647px]">
        <label 
          htmlFor="keyword"
          className="absolute left-3 top-0 -translate-y-1/2 px-1
          bg-white text-xs text-gray-1000 
          pointer-events-none transition-colors 
          duration-200 peer-focus:text-blue-600
        ">
          公司名稱
        </label>
        <input
          id="keyword"
          type="text"
          placeholder="請輸入公司名稱"
          className="w-full px-3 py-4
            border border-gray-500 rounded
            text-base bg-gray-100
            focus:border-blue-600 focus:outline-none"
          value={filters.keyword}
          onChange={handleKeywordChange}
        />
      </div>      

      <div className="relative w-[263.5px]">
        <label 
          htmlFor="educationLevel"
          className="absolute left-3 top-0 -translate-y-1/2 px-1
          bg-white text-xs text-gray-1000
          pointer-events-none transition-colors 
          duration-200 peer-focus:text-blue-600
        ">
          教育程度
        </label>
        <select
          id="educationLevel"
          className="w-full px-3 py-4
            border border-gray-500 rounded
            text-base bg-gray-100
            focus:border-blue-600 focus:outline-none"
          value={filters.educationLevel}
          onChange={handleEducationChange}
        >
          <option value="">
            不限
          </option>

          {educationLevelList?.map((education) => (
            <option
              key={education.id}
              value={education.id}
            >
              {education.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="relative w-[263.5px]">
        <label 
          htmlFor="salaryLevel"
          className="absolute left-3 top-0 -translate-y-1/2 px-1
          bg-white text-xs text-gray-1000 
          pointer-events-none transition-colors 
          duration-200 peer-focus:text-blue-600
        ">
          薪水範圍
        </label>
        <select
          id="salaryLevel"
          className="w-full px-3 py-4
            border border-gray-500 rounded
            text-base bg-gray-100
            focus:border-blue-600 focus:outline-none"
          value={filters.salaryLevel}
          onChange={handleSalaryChange}
        >
          <option value="">
            不限
          </option>

          {salaryLevelList?.map((salary) => (
            <option
              key={salary.id}
              value={salary.id}
            >
              {salary.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        className="px-[22px] py-[18px] w-[108px]
          rounded 
          bg-gray-700 text-white"
        onClick={onSearch}
      >
        條件搜尋
      </button>
    </div>
  );
}

export default SearchToolbar;