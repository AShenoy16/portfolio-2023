import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

{
  /* This gets all the words and loops through them with a duration of 2 seconds */
}
export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi I'm Adi", "Adi", "Berserk"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#ED2939" />
      </h1>
    </div>
  );
}
