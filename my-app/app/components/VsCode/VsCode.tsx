'use client'
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import style from './style.module.css'
const VSCodeBox = () => {
  const [fullText, setFullText] = useState<string[]>([]);
  const lines = [
    "const greeting = 'Hello, World!';",
    'const infoAboutMe = {',
    'myPreferredName: "Helmy,',
    "age: 22,",
    'nationality: "Egyption",',
    '}'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < lines.length) {
        setFullText((prev) => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.vsCodeBox}>
      <pre className="text-secondaryColor text-base">
        {fullText.map((line, index) => (
          <div key={index}>
            <Typewriter words={[line]} typeSpeed={50} cursor={index === fullText.length - 1} delaySpeed={index * 1} />
          </div>
        ))}
      </pre>
    </div>
  );
};

export default VSCodeBox;
