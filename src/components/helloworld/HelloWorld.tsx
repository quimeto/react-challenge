import { useState } from 'react';

import './HelloWorld.css';

function HelloWorld() {
  const [greeting] = useState('Hello, React!');

  return (
    <div className="hello">
      <h1>{greeting}</h1>
    </div>
  );
}

export default HelloWorld;
