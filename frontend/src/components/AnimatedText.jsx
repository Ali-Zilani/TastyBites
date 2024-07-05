import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function AnimatedText() {
  const [text] = useTypewriter({
    words: ['Delectable Food', 'Exquisite Cuisines', 'Savory Sensations'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  return (
    <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
      Dive into Delights of {' '}
      <span className='text-green'>{text}</span>
      <Cursor cursorStyle='|' cursorColor='green' />
    </h2>
  );
}

export default AnimatedText;
