import React, { useState, useEffect } from 'react';

const App = () => {

  const [dateState, setDateState] = useState(new Date());
  const [intervalState, setIntervalState] = useState();

  useEffect(() => {
    setIntervalState(setInterval(() => {
    setDateState(new Date());
  }, 1000));

    return () => {
      console.log("cleared");
      clearInterval(intervalState);
    }
  }, []);

  return (
    <h1>{dateState.toLocaleTimeString("en-GB")}</h1>
  );
}

export default App;
