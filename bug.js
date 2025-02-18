```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Incorrect logic here.  The interval keeps restarting,
    // leading to memory leaks and unexpected behavior.
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup function
  }, []); // Empty dependency array means runs only once

  return <div>Count: {count}</div>;
}

export default MyComponent;
```