import { useEffect, useState } from "react";

export default function VerticalScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const winHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / winHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed left-[1px] top-1/2 -translate-y-1/2 h-[100vh] w-[2px] z-50 flex flex-col items-center">
      {/* Background Line */}
      <div className="w-[2px] bg-gray-300 h-full rounded-full relative">
        {/* Progress Line */}
        <div
          className="absolute left-0 top-0 w-[2px] bg-blue-500 rounded-full transition-all duration-100"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Percent Text */}
      <div className="mt-2 text-sm font-medium text-blue-500">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
}
