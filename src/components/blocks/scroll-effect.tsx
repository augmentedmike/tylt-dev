"use client";

import { useEffect } from "react";

/**
 * Ports the design's scroll behavior: shrinks the sticky header past 10px of
 * scroll and keeps `--header-h` in sync so the pilot bar sits flush beneath it.
 */
export function ScrollEffect() {
  useEffect(() => {
    const updateHeaderH = () => {
      const hdr = document.querySelector("header");
      if (hdr) {
        document.documentElement.style.setProperty(
          "--header-h",
          hdr.offsetHeight + "px",
        );
      }
    };
    const onScroll = () => {
      document.body.classList.toggle("tylt-scrolled", window.scrollY > 10);
      setTimeout(updateHeaderH, 260);
      updateHeaderH();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const raf = requestAnimationFrame(() => setTimeout(updateHeaderH, 50));
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
