import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    let rafId;

    const handleMouseMove = (e) => {
      if (!glowRef.current) return;

      const x = e.clientX - 90;
      const y = e.clientY - 90;

      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        fixed
        pointer-events-none
        z-[9999]
        w-[180px]
        h-[180px]
        rounded-full
        bg-green-400/10
        blur-[70px]
        mix-blend-screen
        will-change-transform
      "
    />
  );
}