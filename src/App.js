import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';

const APIKey=process.env.REACT_APP_API_KEY;

function App() {
  useEffect(() => {
    alanBtn({
      key: APIKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newResources') {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>Educator</h1>
    </div>
  );
}

export default App;
