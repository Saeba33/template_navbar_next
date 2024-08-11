import { useState, useRef } from "react";

const getInitialWidth = () => {
  const screenWidth = window.innerWidth;
  return Math.max(screenWidth / 6, 200);
};

const MIN_WIDTH_PERCENTAGE = 1 / 6;
const MAX_WIDTH_PERCENTAGE = 0.5;

export function useResizableNav() {
  const [width, setWidth] = useState(getInitialWidth());
  const navRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startWidth = navRef.current ? navRef.current.offsetWidth : width;

    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const minWidth = screenWidth * MIN_WIDTH_PERCENTAGE;
      const maxWidth = screenWidth * MAX_WIDTH_PERCENTAGE;
      const newWidth = Math.max(
        Math.min(startWidth + e.clientX - startX, maxWidth),
        minWidth
      );
      setWidth(newWidth);
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
