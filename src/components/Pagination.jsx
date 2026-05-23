import { useMemo } from 'react';
import prevNextIcon from '../assets/pagination-next-black.png';

// 核心邏輯：計算要顯示的頁碼陣列
function getPageNumbers(currentPage, totalPages, maxButtons) {
  const pages = [];
  
  if (totalPages <= maxButtons) {
    // 總頁數比限制還少，直接全開
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    // 總頁數超出限制，計算以當前頁為中心的起點
    let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let end = start + maxButtons - 1;

    // 防止右邊溢出
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxButtons + 1);
    }
    
    for (let i = start; i <= end; i++) pages.push(i);
  }
  return pages;
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // 使用 useMemo 優化，避免重複計算
  // 手機版固定最多顯示 6 個，桌機版可以顯示更多（例如 10 個）
  const mobilePages = useMemo(() => getPageNumbers(currentPage, totalPages, 6), [currentPage, totalPages]);
  const desktopPages = useMemo(() => getPageNumbers(currentPage, totalPages, 10), [currentPage, totalPages]);

  // 如果只有 1 頁或沒有資料，就不顯示分頁條
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-[6px]">
      {/* 上一頁按鈕 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex justify-center items-center w-8 h-8 
        rounded-full
        disabled:opacity-50 disabled:cursor-not-allowed 
        hover:bg-gray-50 transition"
      >
        <img src={prevNextIcon} alt="上一頁" className="rotate-180"/>
      </button>

      {/* 手機版：最多 6 個頁碼 */}
      <div className="flex gap-[6px] sm:hidden">
        {mobilePages.map((page) => (
          <button
            key={`mobile-${page}`}
            onClick={() => onPageChange(page)}
            className={`flex justify-center items-center w-8 h-8
              rounded-full 
              text-sm font-medium
              transition 
              ${
                currentPage === page
                  ? "bg-gray-300"
                  : "hover:bg-gray-50"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 桌機版（sm以上）：最多 10 個頁碼 */}
      <div className="flex gap-[6px] hidden sm:flex">
        {desktopPages.map((page) => (
          <button
            key={`desktop-${page}`}
            onClick={() => onPageChange(page)}
            className={`flex justify-center items-center w-8 h-8
              rounded-full 
              text-sm font-medium
              transition 
              ${
                currentPage === page
                  ? "bg-gray-300"
                  : "hover:bg-gray-50"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 下一頁按鈕 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex justify-center items-center w-8 h-8 
        rounded-full
        disabled:opacity-50 disabled:cursor-not-allowed 
        hover:bg-gray-50 transition"
      >
        <img src={prevNextIcon} alt="下一頁" />
      </button>
    </div>
  );
}
