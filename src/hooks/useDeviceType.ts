import { useEffect, useState } from 'react';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDeviceType('desktop');
      } else if (width >= 768 && width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    window.addEventListener('resize', updateDeviceType);
    updateDeviceType(); // Gọi ngay khi component mount

    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return deviceType;
};
