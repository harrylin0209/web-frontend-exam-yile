import closeIcon from '../assets/close-icon.png';
import ImageCarousel from './ImageCarousel';

function JobPanel({
  isLoading,
  error,
  jobDetail,
  onClose,
}) {
  const handlePanelClick = (e) => {e.stopPropagation();};

  return (
    <div
      className="
        fixed inset-0 z-50
        flex justify-center items-center
        bg-black/40
      "
      onClick={onClose}
      role="button"
      tabIndex={0}
    >
      {/* white panel */}
      <div
        className="
          relative
          w-[331px] md:w-[750px]
          h-[768px]
          rounded
          bg-white
          shadow-xl
        "
        onClick={handlePanelClick}
      >
        
        <div className="
          px-6 py-4 
          border-b border-500 
          text-2xl text-gray-1000 font-bold leading-[125%]
        ">
          詳細資訊
        </div>
        
        <div className="px-6 py-5 h-[654px] overflow-y-auto">
          {isLoading && (
            <div>Loading...</div>
          )}

          {error && (
            <div>{error}</div>
          )}

          {jobDetail && (
            <>
              <div className="flex items-center gap-2 mb-[18px]">
                <span className="text-2xl font-bold">{jobDetail.companyName}</span>
                <span className="text-xl font-normal">{jobDetail.jobTitle}</span>
              </div>
              
              <ImageCarousel images={jobDetail.companyPhoto} />

              <h3 className="mb-2 text-xl font-bold">工作內容</h3>
              <div
                className="
                  px-2
                  text-gray-800
                  [&_ul]:list-disc
                  [&_ul]:pl-6
                  [&_li]:mb-1
                  [&_p]:mb-4
                  [&_h1]:text-xl
                  [&_h2]:text-lg
                  [&_a]:text-blue-600
                "
                dangerouslySetInnerHTML={{
                  __html: jobDetail?.description.replaceAll('<br />', '</li><li>')
                    || "",
                }}
              />
            </>
          )}
        </div>

        {/* close */}
        <div className="p-2 border-t border-gray-500 flex justify-end">          
          <button
            type="button"
            onClick={onClose}
          >
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobPanel