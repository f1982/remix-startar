import React from 'react';

export type KeyProps = {
  keycode: string;
  char: string;
  style: string;
  x: number;
  y: number;
  width: number;
  height: number;
}
// {
//   "keycode": "113",
//   "char": "F1",
//   "style": "function",
//   "position": {
//     "x": 2,
//     "y": 0
//   }
//}

function Key(props: KeyProps) {
  const { width, height, char } = props
  const ratio = 4
  const padding = 10
  return (
    <button
      className="w-12 h-12 mx-1 my-1 rounded-lg bg-white border-2 border-light-blue-200 focus:outline-none focus:shadow-outline-blue"
      style={{
        position: 'absolute',
        left: props.x*ratio ,
        top: props.y*ratio,
        width: `${width * ratio}px`,
        height: `${height * ratio}px`,
      }}
    >
      {props.char}
    </button>
  );
}

interface KeyboardProps {
  config: KeyProps[];
}

function Keyboard(props: KeyboardProps) {
  const keys = props.config.map((key) => (
    <Key key={key.keycode} {...key} />
  ));

  return <div className="w-100wh" style={{ position: 'relative', margin: 100, height: 500 }}>{keys}</div>;
}

export default Keyboard;
