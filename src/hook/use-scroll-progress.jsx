import { useState, useEffect } from "react";

export const useScrollProgress = (ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top, height } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.min(Math.max((windowHeight - top) / height, 0), 1);
      setProgress(scrollProgress);
    };

    // Добавляем обработчик изменения размера окна
    const handleResize = () => {
      handleScroll(); // Пересчитываем progress
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    handleScroll(); // Вызываем сразу при монтировании
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return progress;
};

