import React, { useEffect, useState } from 'react';

function App() {
  const [tt, setTt] = useState(false)

  useEffect(() => {
    setTt(true)
    console.log(tt);
    return () => {
      console.log('0', tt);
    }
  }, [tt])
  return (
    <div>Hello World!</div>
  );
}
export default App;
