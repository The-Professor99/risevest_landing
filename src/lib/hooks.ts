import { useState, useEffect } from "react";

function useDocumentDimensions() {
  const [dimensions, setDimensions] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}

export default useDocumentDimensions;
