import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function AnimatedTextForMenu() {
  const [text] = useTypewriter({
    words: ["Delicious Food", "Exquisite Cuisines", "Savory Sensations"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  return (
    <h2 className="md:text-5xl text-4xl font-bold  md:leading-snug leading-snug">
      For the Love of <span className="text-green">{text}</span>
      <Cursor cursorStyle="|" cursorColor="green" />
    </h2>
  );
}

export default AnimatedTextForMenu;
