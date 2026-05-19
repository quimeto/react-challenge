import { useState, useEffect, useCallback } from 'react';

import './Counter.css';
import { useStorageService } from '../../hooks/useStorageService';

function Counter() {
  const storageServiceRef = useStorageService();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!storageServiceRef.current) return;
    const countInStorage = storageServiceRef.current.load('count');

    if (countInStorage) {
      setCount(Number(countInStorage));
    } else {
      storageServiceRef.current.save('count', count.toString());
    }
  }, [storageServiceRef, count])

  const increment = useCallback(() => {
    setCount((prev) => {
      const next = prev + 1;
      storageServiceRef.current?.save('count', next.toString());
      return next;
    });
  }, [storageServiceRef]);

  const decrement = useCallback(() => {
    setCount((prev) => {
      const next = prev - 1;
      storageServiceRef.current?.save('count', next.toString());
      return next;
    });
  }, [storageServiceRef]);

  const reset = useCallback(() => {
    const next = 0;
    setCount(next);
    storageServiceRef.current?.remove('count');
  }, [storageServiceRef]);

  return (
    <div className="counter">
      <h1 className="counter-title">Counter</h1>
      <p className="counter-value">Current Count: {count}</p>
      <button className="increment-btn" onClick={increment}>Increment</button>
      <button className="decrement-btn" onClick={decrement}>Decrement</button>
      <button className="reset-btn" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
