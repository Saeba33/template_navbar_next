import { useState, useRef, useEffect } from "react";

export function useResizableNav(
  initialWidthRatio = 1 / 6,
  maxWidthRatio = 0.5
) {
  const minWidth = window.innerWidth * initialWidthRatio;
  const maxWidth = window.innerWidth * maxWidthRatio;
  const [width, setWidth] = useState(minWidth);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth((prevWidth) =>
        Math.max(minWidth, Math.min(prevWidth, maxWidth))
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth, maxWidth]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = navRef.current.offsetWidth;

    const handleMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      setWidth(Math.max(minWidth, Math.min(newWidth, maxWidth)));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return { width, navRef, handleMouseDown };
}
