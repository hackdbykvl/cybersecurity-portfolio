import { useEffect, useState } from "react";

export default function Typewriter({
  texts = [],
  speed = 80,
  delay = 1500,
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentText.length) {
          setIsDeleting(true);
          setTimeout(() => {}, delay);
        }
      } else {
        setDisplay(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return (
    <span className="text-green-400 font-mono">
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}