import { useState, useEffect } from 'react';

function useItemsPerPage() {
  // 預設為行動版 4 筆
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    // 對齊 Tailwind 的 sm 斷點 (640px)
    const mediaQuery = window.matchMedia('(min-width: 640px)');
    
    // 定義更新邏輯
    const handleBreakpointChange = (e) => {
      setItemsPerPage(e.matches ? 6 : 4);
    };

    // 初始化檢查
    handleBreakpointChange(mediaQuery);

    // 監聽視窗變化
    mediaQuery.addEventListener('change', handleBreakpointChange);
    return () => mediaQuery.removeEventListener('change', handleBreakpointChange);
  }, []);

  return itemsPerPage;
}

export default useItemsPerPage;