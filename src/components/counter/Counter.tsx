import { useState, useEffect, useCallback, SetStateAction } from 'react';

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
  }, [storageServiceRef.current])

  const counterAction = (action: SetStateAction<number>) => {
    return useCallback(() => {
      setCount(action);
      storageServiceRef.current?.save('count', count.toString());
    }, [storageServiceRef])
  }

  const increment = counterAction((prev) => prev + 1);
  const decrement = counterAction((prev) => prev - 1);
  const reset = counterAction(() => 0);

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
