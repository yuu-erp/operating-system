import { useEffect, useState } from 'react';

// Phân tích user agent để xác định thiết bị
const getDeviceDetails = () => {
  const ua = navigator.userAgent;

  // Kiểm tra kích thước viewport
  const isPortrait = window.innerHeight > window.innerWidth;

  // Phân loại dựa trên user agent và kích thước viewport
  const isMobile = /Mobi|Android/i.test(ua);
  const isTablet = /iPad|Tablet/i.test(ua) && !/Mobi/i.test(ua);
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isDesktop = !isMobile && !isTablet;

  return {
    deviceType: isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop',
    isPortrait,
    isAndroid,
    isIOS,
  };
};


// Xác định định hướng màn hình
const getOrientation = () => {
  return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
};

export default function useDeviceType() {
  const [deviceDetails, setDeviceDetails] = useState(getDeviceDetails());
  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    const handleResize = () => {
      setOrientation(getOrientation());
    };

    const handleUserAgentChange = () => {
      setDeviceDetails(getDeviceDetails());
    };

    // Đăng ký sự kiện resize để cập nhật lại khi kích thước màn hình thay đổi
    window.addEventListener('resize', handleResize);

    // Cập nhật thông tin thiết bị khi trang được tải lại
    handleUserAgentChange();

    // Xóa sự kiện khi component bị hủy
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { deviceDetails, orientation };
}
