"use client";

import { useEffect } from "react";

export function useScrollbarVisibility(hideDelay = 1000) {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const show = () => {
      document.body.classList.add("scrolling");
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove("scrolling");
      }, hideDelay);
    };

    window.addEventListener("scroll", show);
    return () => {
      window.removeEventListener("scroll", show);
      clearTimeout(timeout);
    };
  }, [hideDelay]);
}