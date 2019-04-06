import React, { useState, useEffect } from 'react';
import './styles.css';

const App: React.FunctionComponent<Props> = ({ name }) => {
  const [nameToUse, updateNameToUse] = useState('Hamilton');
  useEffect(() => {
    const funcTimer = setTimeout(() => {
      updateNameToUse(name);
    }, 3500);
    return () => {
      clearTimeout(funcTimer);
    };
  });
  return (
    <h1 className="header">TypeScript is now working! Go {nameToUse}!!!</h1>
  );
};

interface Props {
  name: string;
}

export default App;
