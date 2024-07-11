import { useEffect } from "react";

const useVisibilityToggle = (toggleVisibility, elementRef) => {
  useEffect(() => {
    const handleClickOutside = (event) => {console.log(event.target)
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        toggleVisibility(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleVisibility, elementRef]);
};

export default useVisibilityToggle;
