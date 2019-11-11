import React from 'react';
import {MainPage} from './pages/main-page';

function App() {
  const metadata = [
    {name: 'penalty-function-1', description: 'Penalty Function 1'},
    {name: 'penalty-function-2', description: 'Penalty Function 2'},
    {name: 'rosenbrock-function', description: 'Rosenbrock Function'},
    {name: 'powell-function', description: 'Powell Function'},
  ];
  return (
    <div className="test-env">
      <MainPage metadata={metadata} />
    </div>
  );
}

export default App;
