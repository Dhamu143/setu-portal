"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // Custom Cursor
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    if (cursor && ring) {
      let mx = 0,
        my = 0,
        rx = 0,
        ry = 0;
      let frameId: number;

      const mouseMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
      };

      document.addEventListener("mousemove", mouseMove);

      const anim = () => {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        frameId = requestAnimationFrame(anim);
      };
      anim();

      const interactables = document.querySelectorAll(
        "a, button, .offering-card",
      );

      const enterAnim = () => {
        cursor.style.transform = "translate(-50%,-50%) scale(2.2)";
        ring.style.width = "58px";
        ring.style.height = "58px";
      };
      const leaveAnim = () => {
        cursor.style.transform = "translate(-50%,-50%) scale(1)";
        ring.style.width = "38px";
        ring.style.height = "38px";
      };

      interactables.forEach((el) => {
        el.addEventListener("mouseenter", enterAnim);
        el.addEventListener("mouseleave", leaveAnim);
      });

      // Cleanup
      return () => {
        document.removeEventListener("mousemove", mouseMove);
        cancelAnimationFrame(frameId);
        interactables.forEach((el) => {
          el.removeEventListener("mouseenter", enterAnim);
          el.removeEventListener("mouseleave", leaveAnim);
        });
      };
    }
  }, []);

  useEffect(() => {
    // Scroll reveal observer
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 90);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    // We observe after a small delay to ensure React has rendered
    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    }, 100);

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  );
}
