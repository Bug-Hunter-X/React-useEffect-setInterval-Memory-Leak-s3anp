```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array means runs only once

  return <div>Count: {count}</div>;
}

export default MyComponent;
```